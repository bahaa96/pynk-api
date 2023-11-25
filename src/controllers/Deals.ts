import {Elysia, t} from "elysia";
import {db} from "../db";
import {deal} from "../schema";
import {eq} from 'drizzle-orm'

const DealsController =  new Elysia({ prefix: '/deals' })
  .get('/', ({ set }) => {
    try {
      return db.select().from(deal);
    } catch(error) {
      set.status = 400;
      return "Something Went Wrong!";
    }
  })
  .post('/new', async ({ body, set }) => {
    console.log('body: ', JSON.stringify(body, null, 2))
    try {
      const newDeal = await db.insert(deal).values({
        title: body.title,
        slug: body.slug,
        storeId: body.storeId,
        code: body.code
      })
      set.status = 201;
      return newDeal;
    } catch (error) {
      set.status = 400;
      return "Something Went Wrong!"
    }
  },{
    body: t.Object({
      title: t.String(),
      slug: t.String(),
      storeId: t.String(),
      code: t.String(),
    })
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
    })
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
    })
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
    })
  })

export default DealsController