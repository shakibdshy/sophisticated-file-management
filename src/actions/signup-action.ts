"use server";

import bcrypt from "bcryptjs";
import { signUpSchema } from "@/validations/auth.schema";
import * as z from "zod";
import { db } from "@/utils/db";
import { getUserByEmail } from "@/data/user";

export const signUpAction = async (values: z.infer<typeof signUpSchema>) => {
  const validatedFields = signUpSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Credentials!" };
  }

  const {fName, lName, email, password} = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "User already exists!" };
  }

  await db.user.create({
    data: {
      name: fName + " " + lName,
      email,
      password: hashedPassword,
    },
    include: {
      accounts: true,
    },
  });

  return { success: "Successfully User Created!" };
};
