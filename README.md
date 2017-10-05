# cloudflare-middleware

Restores request origin ip to `req.ip`. Denies other requests.

## Usage

```nodejs
let app = express();
app.use(require("cloudflare-middleware")());
```

This is a safer alternative to `app.set("trust proxy");`, as this checks CloudFlare IP address ranges.
