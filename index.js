const cfip = require("cloudflare-ip");

module.exports = function(req, res, next) {
  if(cfip(req.ip))
    req.ip = req.headers['cf-connecting-ip'];
};
