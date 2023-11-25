import {Elysia} from "elysia";
import * as lookups from "../lookups";

const LookupsController =  new Elysia({ prefix: '/lookups' })
  .get('/countries', ({ set }) => {
    try {
      return lookups.countries
    } catch(error) {
      set.status = 400;
      return "Something Went Wrong!";
    }
  })

export default LookupsController