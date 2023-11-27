import {Elysia, t} from "elysia";
import phin from 'phin';

import config from "../config";

const Assets = new Elysia({ prefix: '/assets' })
  .put('/app', () => {
    const filename = 'red-sauce.jpg';

    return phin({
      url: `${config.bunnyStorageHostname}/${config.bunnyStorageZoneName}/app/${filename}`,
      method: 'PUT',
      headers: {
        'AccessKey': config.bunnyStorageAPIKey,
        'Content-Type': 'application/octet-stream',
      },
    })
  }, {
    body: t.Object({
      filename: t.String(),
      binary: t.File({ type: 'image' }),
    }),
    detail: {
      tags: ['Assets'],
      summary: "Uploads Single App Image"
    }
  })
  .put('/user', () => {
    const filename = 'red-sauce.jpg';

    return phin({
      url: `${config.bunnyStorageHostname}/${config.bunnyStorageZoneName}/user/${filename}`,
      method: 'PUT',
      headers: {
        'AccessKey': config.bunnyStorageAPIKey,
        'Content-Type': 'application/octet-stream',
      },
    })
  }, {
    body: t.Object({
      filename: t.String(),
      binary: t.File({ type: 'image' }),
    }),
    detail: {
      tags: ['Assets'],
      summary: "Uploads Single User Image"
    }
  })
  .delete('/', ({ body: { filePath } }) => {
    return phin({
      url: `${config.bunnyStorageHostname}/${config.bunnyStorageZoneName}/${filePath}`,
      method: 'DELETE',
      headers: {
          'AccessKey': config.bunnyStorageAPIKey,
      }
    })
  }, {
    body: t.Object({
      filePath: t.String(),
    }),
    detail: {
      tags: ['Assets'],
      summary: "Deletes a specific Asset"
    }
  })


export default Assets