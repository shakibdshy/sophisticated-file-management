import NextAuth, { type DefaultSession } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "../auth.config";
import { db } from "@/utils/db";
import { getUserById } from "./data/user";
import { Role } from "@prisma/client";

declare module "next-auth" {
  interface Session {
    user: {
      role: Role;
    } & DefaultSession["user"]
  }
}

export const { auth, handlers, signIn, signOut } = NextAuth({
  callbacks: {
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.sub,
          role: token.role,
        }
      };
    },
    async jwt({ token }) {
      if(!token.sub) return token;

      const existingUser =  await getUserById(token.sub);
      if(!existingUser) return token;

      token.role = existingUser.role;

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
