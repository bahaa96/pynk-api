import {Elysia} from "elysia";

const StoresController =  new Elysia({ prefix: '/stores' })
  .get('/', () => {

  }, {
    detail: {
      tags: ['Stores']
    }
  })
  .post('/new', () => {

  }, {
    detail: {
      tags: ['Stores']
    }
  })
  .get('/document/:id', () => {

  }, {
    detail: {
      tags: ['Stores']
    }
  })
  .patch('/document/:id', () => {

  }, {
    detail: {
      tags: ['Stores']
    }
  })
  .delete('/document/:id', () => {

  }, {
    detail: {
      tags: ['Stores']
    }
  })

export default StoresController