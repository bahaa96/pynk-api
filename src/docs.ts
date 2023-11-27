import {ElysiaSwaggerConfig} from "@elysiajs/swagger/dist/types";

export default {
  exclude: ['/'],
  documentation: {
    info: {
      title: "Pynk. API Docs",
      version: '0.0.1',
      description: "Serving Pynk. Client Apps and Admin Dashboard",
    },
    tags: [
      { name: 'Admins' },
      { name: 'Users' },
      { name: 'Reset User Password' },
      { name: 'Deals' },
      { name: 'Stores' },
      { name: 'Lookups' },
      { name: 'Assets' },
    ]
  }
} as ElysiaSwaggerConfig<"/swagger">