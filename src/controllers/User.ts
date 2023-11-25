import {Elysia} from "elysia";

import ResetPasswordController from "./ResetPassword";

const UserController =  new Elysia({ prefix: '/admin' })
  .post('/signup', () => {

  })
  .post('/login', () => {

  })
  .post('/logout', () => {

  })
  .use(ResetPasswordController)

export default UserController