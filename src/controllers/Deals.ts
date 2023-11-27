import {Elysia, t} from "elysia";
import {db} from "../db";
import {deal, dealTranslation} from "../schema";
import {eq} from 'drizzle-orm'
import Locale from "../types/Locale";

const DealsController =  new Elysia({ prefix: '/deals' })
  .get('/', ({ set }) => {
    try {
      return db.select().from(deal);
    } catch(error) {
      set.status = 400;
      return "Something Went Wrong!";
    }
  }, {
    detail: {
      tags: ['Deals'],
      summary: "Returns all Deals of all Stores"
    }
  })
  .post('/new', async ({ body, set }) => {
    try {
      const newDeal = await db.insert(deal).values({
        storeId: body.storeId,
        code: body.code
      })
      for(const locale in Locale) {
        await db.insert(dealTranslation).values({
          dealId: newDeal.id,
          title: body.title?.[locale],
          slug: body.slug?.[locale],
          languageId: locale
        })
      }
      set.status = 201;
      return newDeal;
    } catch (error) {
      set.status = 400;
      console.log(error)
      return "Something Went Wrong!"
    }
  },{
    body: t.Object({
      title: t.Object({
        [Locale.EN]: t.String(),
        [Locale.AR]: t.String(),
        }),
      slug: t.Object({
        [Locale.EN]: t.String(),
        [Locale.AR]: t.String(),
      }),
      storeId: t.String(),
      code: t.String(),
    }),
    detail: {
      tags: ['Deals'],
      summary: "Creates a new Deal",
    }
  })
  .get('/document/:id', async ({ params: { id }, set}) => {
    try {
      return await db.select().from(deal).where(eq(deal.id, id));
    } catch(error) {
      set.status = 400;
      return "Something Went Wrong!"
    }
  }, {
    params: t.Object({
      id: t.String(),
    }),
    detail: {
      tags: ['Deals'],
      summary: "Returns a Specific Deal Document",
    }
  })
  .patch('/document/:id', async ({ body, set }) => {
    try {
      return await db.update(deal).set({
        title: body.title,
        slug: body.slug,
        storeId: body.storeId,
        code: body.code
      })
    } catch(error) {
      set.status = 400;
      return "Something Went Wrong!"
    }
  }, {
    body: t.Object({
      title: t.String(),
      slug: t.String(),
      storeId: t.String(),
      code: t.String(),
    }),
    detail: {
      tags: ['Deals'],
      summary: "Updates a Specific Deal Document",
    }
  })
  .delete('/document/:id', async ({ params: { id }, set }) => {
    try {
      await db.delete(deal).where(eq(deal.id, id))
      set.status = 202;
    } catch(error) {
      set.status = 400;
      return "Something Went Wrong!"
    }
  }, {
    params: t.Object({
      id: t.String(),
    }),
    detail: {
      tags: ['Deals'],
      summary: "Deletes a Specific Deal Document",
    }
  })

export default DealsController