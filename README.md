# cloudflare-middleware

Restores request origin ip to `req.ip`.

## Usage

```nodejs
let app = express();
app.use(require("cloudflare-middleware"));
```
