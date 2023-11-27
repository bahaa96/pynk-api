import {integer, sqliteTable, text} from "drizzle-orm/sqlite-core";
import {createId} from "@paralleldrive/cuid2";

interface IPalette {
  textColor: string;
  actionColor: string;
  dealActionText: string;
  dealActionTheme: string;
  dealCardBG: string;
}

export const store = sqliteTable("store", {
  id: text('id').$defaultFn(() => createId()),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  profilePicture: text("profile_picture"),
  watermark: text("watermark"),
  redirectURL: text("redirect_url").notNull(),
  totalOffers: integer("total_offers").default(0),
  palette: text("palette", { mode: 'json' }).$type<IPalette>(),
});
