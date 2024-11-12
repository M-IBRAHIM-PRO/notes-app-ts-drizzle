"use server";
import { eq, not } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "@/db/drizzle";
import { todo } from "@/db/schema";

export const getData = async (userId:number) => {  //Get the data for specific user based on id given as userId
  const data = await db.select().from(todo).where(eq(todo.userId,userId));
  return data
};

export const addTodo = async (id: number, text: string, userId: number) => {
  await db.insert(todo).values({
    id,
    text: text,
    userId,
  });
  revalidatePath("/");
};


export const deleteTodo = async (id: number) => {
  await db.delete(todo).where(eq(todo.id, id));

  revalidatePath("/");
};

export const toggleTodo = async (id: number, done: boolean) => {
  await db
    .update(todo)
    .set({
      done: done,
    })
    .where(eq(todo.id, id));

  revalidatePath("/");
};

export const editTodo = async (id: number, text: string) => {
  await db
    .update(todo)
    .set({
      text: text,
    })
    .where(eq(todo.id, id));

  revalidatePath("/");
};