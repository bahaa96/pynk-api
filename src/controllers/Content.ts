import {Elysia} from "elysia";

import DealsController from './Deals'
import StoresController from './Stores'
import LookupsController from "./Lookups";

const ContentController =  new Elysia({ prefix: '/content' })
  .use(DealsController)
  .use(StoresController)
  .use(LookupsController)

export default ContentController