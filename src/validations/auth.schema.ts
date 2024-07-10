import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export type SignInSchema = z.infer<typeof signInSchema>;

export const signUpSchema = z.object({
  fName: z.string().min(1, { message: "First Name is required" }),
  lName: z.string().min(1, { message: "Last Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
