"use server";

import { signInSchema } from "@/schemas/auth.schema";
import * as z from "zod";

export const signInAction = async (values: z.infer<typeof signInSchema>) => {
  const validatedFields = signInSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Credentials!" };
  }

  return { success: "Successfully Signed In!" };
};
