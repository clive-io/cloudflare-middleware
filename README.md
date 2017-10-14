# cloudflare-middleware

Restores request origin ip to `req.origin_ip`. Denies other requests.

## Usage

```nodejs
let app = express();
app.use(require("cloudflare-middleware")());
```

This is a safer alternative to naively using `app.set("trust proxy");`, as this checks CloudFlare IP address ranges.

This, however, has been deprecated in favor of the following:

```nodejs
const cloudflareIp = require('cloudflare-ip');

app.set('trust proxy', ip => {
  if(ip.startsWith('::ffff:'))
    ip = ip.substr(7);
  return ip == '127.0.0.1' || cloudflareIp(ip);
});
