import {integer, pgTable, serial, text, timestamp, varchar, decimal } from "drizzle-orm/pg-core"


export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  created_at: timestamp("created_at").notNull().defaultNow(),
  user_id: varchar("user_id", {length:256}),
  explorative: decimal("1-explorative", {precision: 3, scale: 2}).notNull(),
  taste: decimal("2-taste", {precision: 3, scale: 2}).notNull(),
  mood: decimal("3-mood", {precision: 3, scale: 2}).notNull(),
  style: decimal("4-style", {precision: 3, scale: 2}).notNull(),
  email: varchar("email", {length:256}),
})

export const questions = pgTable("questions", {
    id: serial("id").primaryKey(),
    created_at: timestamp("created_at").notNull().defaultNow(),
    questions: text("questions").notNull(),
    category: integer("category").notNull(),
})


export const choices = pgTable("choices", {
    id: serial("id").primaryKey(),
    created_at: timestamp("created_at").notNull().defaultNow(),
    question_id: integer("question_id").references(()=>questions.id).notNull(),
    choice: text("choice").notNull(),
    score: decimal("score", {precision: 3, scale: 2}).notNull(),
})
