"use server";

import { auth } from "@/auth";
import { db } from "@/utils/db";

export const uploadFile = async (inputs: any) => {
  const user = await auth();
  console.log(inputs);

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
};
