"use server";
import { eq, not } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "@/db/drizzle";
import { users } from "@/db/schema";
import { createUserType, userType } from "@/types/userType";

export const getAllUsers = async () => {
  const data = await db.select().from(users);
  return data;
};

export const getUser = async (userId: string) => {
  const user = await db.query.users.findMany({
    where: (users, { eq }) => eq(users.clerkId, userId),
    with: {
      todo: true,
    },
  });

  return user;
};

export const addUser = async (user:createUserType) => {
  //Dummy values until the real authentication with clerk 
  await db
    .insert(users)
    .values({
      clerkId: user?.clerkId,
      email: user?.email,
      name: user?.name!,
      firstName: user?.firstName,
      lastName: user?.lastName,
      photo: user?.photo,
    })
    .returning({ clerkClientId: users?.clerkId });
};

