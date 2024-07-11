import { z } from "zod";

export const userSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  emailVerified: z.date().optional(),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  image: z.string().optional(),
  accounts: z.array(z.object({
    type: z.string(),
    provider: z.string(),
    providerAccountId: z.string(),
    refresh_token: z.string().optional(),
    access_token: z.string().optional(),
    expires_at: z.number().optional(),
    token_type: z.string().optional(),
    scope: z.string().optional(),
    id_token: z.string().optional(),
    session_state: z.string().optional(),
  })),
  role: z.enum(["ADMIN", "EDITOR", "VIEWER"]),
});

export type UserSchema = z.infer<typeof userSchema>;