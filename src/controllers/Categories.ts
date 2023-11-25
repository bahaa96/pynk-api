import {Elysia} from "elysia";

const CategoriesController =  new Elysia({ prefix: '/categories' })
  .get('/', () => {

  })
  .post('/new', () => {

  })
  .get('/document/:id', () => {

  })
  .patch('/document/:id', () => {

  })
  .delete('/document/:id', () => {

  })

export default CategoriesController