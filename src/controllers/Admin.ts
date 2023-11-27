import {Elysia, t} from "elysia";

const AdminController =  new Elysia({ prefix: '/admin' })
  .post('/login', () => {

  }, {
    body: t.Object({
      username: t.String(),
      password: t.String(),
    }),
    detail: {
      tags: ['Admins'],
    }
  })
  .post('/logout', () => {

  }, {
    detail: {
      tags: ['Admins'],
    }
  })

export default AdminController