import { db } from "@/utils/db";

export async function getUserByEmail(email: string) {
  try {
    const user = await db.user.findUnique({ where: { email } });
    return user;
  } catch {
    return null;
  }
}

export async function getUserById(id: string) {
  try {
    const user = await db.user.findUnique({ where: { id } });
    return user;
  } catch {
    return null;
  }
}

export async function getAllUsers() {
  try {
    const users = await db.user.findMany({});
    return {isLoading: false, data: users};
  } catch {
    return null;
  }
}