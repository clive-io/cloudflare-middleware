# cloudflare-middleware

Allows requests which originate from Cloudflare. Restores request origin IP
to `req.origin_ip`. Denies other requests.

## Usage

Using [Express trust proxy][trust proxy] (preferred):

```js
const { trustProxy } = require('cloudflare-middleware')

const app = express()
app.set('trust proxy', trustProxy)
```

Using Express middleware:

```js
const { middleware } = require('cloudflare-middleware')

const app = express()
app.use(middleware())
```

Using with another framework:

```js
const http = require('http')
const { isCloudflare } = require('cloudflare-middleware')

http.createServer((req, res) => {
  if (!isCloudflare(req.socket.remoteAddress)) {
    response.end()
  }

  // Proceed with the response.
  response.write('oh, you good')
  response.end()
})
```

[trust proxy]: https://expressjs.com/en/guide/behind-proxies.html

## License

This project is licensed under the ISC license.
