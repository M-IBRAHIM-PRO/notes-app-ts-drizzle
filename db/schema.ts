import { relations } from "drizzle-orm";
import { bigint } from "drizzle-orm/pg-core";
import { integer, text, boolean, pgTable, serial, timestamp } from "drizzle-orm/pg-core";

export const users=pgTable("users",{
  id:serial("id").primaryKey(),
  name:text("name").notNull(),
  email:text("email").unique(),
  clerkId:text("clerkId").notNull(),
  photo:text("photo").notNull(), //Link of google account photo
  firstName:text("firstName").notNull(),
  lastName:text("lastName").notNull(),
  createdAt:timestamp("createdAt").notNull().defaultNow(),
  updatedAt:timestamp("updatedAt").notNull().defaultNow(),
});

export const todo = pgTable("todo", {
  id: bigint("id", {mode:"number"}).primaryKey(),
  text: text("text").notNull(),
  done: boolean("done").default(false).notNull(),
  userId:integer("userId").notNull().references(()=>users.id),
});

export const todoRelations=relations(todo, ({one})=>({
  users:one(users, {fields:[todo.userId], references:[users.id]}),
}));

export const userRelations=relations(users, ({many})=>({
  todo:many(todo),
}));