"use server";

import { signInSchema } from "@/validations/auth.schema";
import * as z from "zod";
import { signIn } from "@/auth";
import { defaultRedirectPath } from "@/config/routes";
import { AuthError } from "next-auth";

export const signInAction = async (values: z.infer<typeof signInSchema>) => {
  const validatedFields = signInSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Credentials!" };
  }

  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: defaultRedirectPath,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid Credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }

    throw error;
  }
};
