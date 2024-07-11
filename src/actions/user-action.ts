"use server";

import { z } from "zod";
import { db } from "@/utils/db";
import { User } from "@prisma/client";
import { userSchema } from "@/validations/user.schema";
import { revalidatePath } from "next/cache";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export async function getAllUsers() {
  try {
    const users = await db.user.findMany();
    return users;
  } catch {
    return null;
  }
}

export async function createUser(user: z.infer<typeof userSchema>) {
  const validatedFields = userSchema.safeParse(user);

  if (!validatedFields.success) {
    return { error: "Invalid Credentials!" };
  }

  const { name, email, password, role } = validatedFields.data;

  try {
    await db.user.create({
      data: {
        name,
        email,
        password,
        role,
      },
    });
    revalidatePath("/admin/users");
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        console.log("User already exists");
      }
    }
  }
}

export async function updateUser(user: User) {
  try {
    const updatedUser = await db.user.update({
      where: { id: user.id },
      data: {
        name: user.name,
        image: user.image,
        role: user.role,
      },
    });
    return updatedUser;
  } catch {
    return null;
  }
}
