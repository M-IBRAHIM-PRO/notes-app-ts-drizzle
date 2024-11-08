"use server";
import { eq, not } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "@/db/drizzle";
import { users } from "@/db/schema";

export const getAllUsers = async () => {
  const data = await db.select().from(users);
  return data;
};

export const getUserData = async (userId: number) => {
  const user = await db.query.users.findMany({
    where: (users, { eq }) => eq(users.id, userId),
    with: {
      todo: true,
    },
  });
  // console.log(JSON.stringify(user, null, 2));
  console.log(user);
  return user;
}

export const addUser = async (user:any) => {
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

