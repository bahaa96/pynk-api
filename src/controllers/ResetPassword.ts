import {Elysia} from "elysia";

const ResetPasswordController = new Elysia({ prefix: '/reset-password' })
  .post('/', () => {
  }, {
    detail: {
      tags: ['Reset User Password'],
    }
  })
  .post('/reset-password/verify', () => {

  }, {
    detail: {
      tags: ['Reset User Password'],
    }
  })

export default ResetPasswordController;