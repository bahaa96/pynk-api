import {Elysia} from "elysia";
import AdminController from "./Admin";
import UserController from "./User";


const AuthController =  new Elysia({ prefix: '/auth' })
  .use(AdminController)
  .use(UserController)

export default AuthController