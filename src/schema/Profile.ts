import {sqliteTable, text} from "drizzle-orm/sqlite-core";
import {createId} from "@paralleldrive/cuid2";

import { deal } from './Deal'

export const profile = sqliteTable("profile", {
  id: text('id').$defaultFn(() => createId()),
  slug: text("slug").notNull().unique(),
  likedDeals: text("liked_deals", { mode: 'json' }).$type<Array<typeof deal>>()
});
