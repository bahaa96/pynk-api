import { Elysia } from "elysia";
import { cors } from '@elysiajs/cors'
import { serverTiming } from '@elysiajs/server-timing'
import { swagger } from '@elysiajs/swagger'

import config from "./config";
import AuthController from './controllers/Auth'
import ContentController from './controllers/Content'

const app = new Elysia()
  .use(serverTiming())
  .use(cors({
      origin: config.frontendURLPattern
  }))
  .use(swagger())
  .use(AuthController)
  .use(ContentController)
  .get('/', () => 'OK!')
  .listen(3000);

console.log(
  `🦊 Pynk is running at ${app.server?.hostname}:${app.server?.port}`
);
