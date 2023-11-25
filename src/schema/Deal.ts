import { sqliteTable, text, blob, integer} from "drizzle-orm/sqlite-core";
import { createId } from '@paralleldrive/cuid2';

import { store } from './Store'
import ICountry from "../types/ICountry";

export const deal = sqliteTable("deal", {
  id: text('id').$defaultFn(() => createId()),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  storeId: text("store_id").notNull().references(() => store.id),
  code: text("code").notNull(),
  expiryDate: blob("expiry_date", {
    mode: "bigint"
  }),
  countries: text("countries", { mode: 'json' }).$type<ICountry[]>(),
  likesCount: integer("likes_count").default(0),
});