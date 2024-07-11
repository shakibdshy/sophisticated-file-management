"use server";

import { auth } from "@/auth";
import { db } from "@/utils/db";
import { revalidatePath } from "next/cache";

export const getFiles = async ({ query, type }: { query?: string; type?: string }) => {
  const user = await auth();
  if (!user) throw new Error("User not found");

  const files = await db.file.findMany({
    where: {
      userId: user.user.id,
      OR: [
        {
          name: {
            contains: query,
            mode: "insensitive",
          },
        },
        {
          type: {
            contains: type,
            mode: "insensitive",
          },
        },
      ],
    },
    include: {
      user: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return files;
};

export const uploadFile = async (inputs: any) => {
  const user = await auth();

  if (!user) throw new Error("User not found");

  try {
    await db.file.create({
      data: {
        ...inputs,
        userId: user.user.id,
      },
      include: {
        user: true,
      },
    });
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/dashboard/file");
};
