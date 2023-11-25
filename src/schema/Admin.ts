import { sqliteTable, text, blob } from "drizzle-orm/sqlite-core";

export const admin = sqliteTable("admin", {
  id: text("id").primaryKey(),
  username: text("username").notNull().unique(),
});

export const adminSession = sqliteTable("admin_session", {
  id: text("id").primaryKey(),
  adminId: text("admin_id")
    .notNull()
    .references(() => admin.id),
  activeExpires: blob("active_expires", {
    mode: "bigint"
  }).notNull(),
  idleExpires: blob("idle_expires", {
    mode: "bigint"
  }).notNull()
});

export const adminKey = sqliteTable("admin_key", {
  id: text("id").primaryKey(),
  adminId: text("admin_id")
    .notNull()
    .references(() => admin.id),
  hashedPassword: text("hashed_password")
});