import {Elysia} from "elysia";

import ResetPasswordController from "./ResetPassword";

const UserController =  new Elysia({ prefix: '/user' })
  .post('/signup', () => {

  }, {
    detail: {
      tags: ['Users'],
    }
  })
  .post('/login', () => {

  }, {
    detail: {
      tags: ['Users'],
    }
  })
  .post('/logout', () => {

  }, {
    detail: {
      tags: ['Users'],
    }
  })
  .use(ResetPasswordController)

export default UserController