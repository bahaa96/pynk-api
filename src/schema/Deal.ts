import { sqliteTable, text, blob, integer} from "drizzle-orm/sqlite-core";
import { createId } from '@paralleldrive/cuid2';

import { store } from './Store'
import ICountry from "../types/ICountry";
import Locale from "../types/Locale";

export const deal = sqliteTable("deal", {
  id: text('id').$defaultFn(() => createId()),
  storeId: text("store_id").notNull().references(() => store.id),
  code: text("code").notNull(),
  expiryDate: blob("expiry_date", {
    mode: "bigint"
  }),
  countries: text("countries", { mode: 'json' }).$type<ICountry[]>(),
  likesCount: integer("likes_count").default(0),
});

export const dealTranslation = sqliteTable("deal_translation", {
  id: text('id').$defaultFn(() => createId()),
  dealId: text("deal_id").references(() => deal.id),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  languageId: text("language_id").notNull().$type<Locale>()
});