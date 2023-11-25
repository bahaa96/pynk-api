import {Elysia} from "elysia";

const ResetPasswordController = new Elysia({ prefix: '/reset-password' })
  .post('/', () => {
  })
  .post('/reset-password/verify', () => {

  })

export default ResetPasswordController;