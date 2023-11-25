import {Elysia} from "elysia";

const AdminController =  new Elysia({ prefix: '/admin' })
  .post('/login', () => {

  })
  .post('/logout', () => {

  })

export default AdminController