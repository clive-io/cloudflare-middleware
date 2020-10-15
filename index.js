const rangeCheck = require('range_check')
const ranges = require('./ranges')

function trimIp(ip) {
  return ip.startsWith('::ffff:') ? ip.substr(7) : ip
}

function isCloudflare(ip) {
  return rangeCheck.inRange(ip, ranges)
}

function trustProxy(ip) {
  const trimmed = trimIp(ip)
  return trimmed == '127.0.0.1' || isCloudflare(trimmed)
}

function middleware(options) {
  return function (req, res, next) {
    if (isCloudflare(trimIp(req.ip))) {
      req.origin_ip = req.headers['cf-connecting-ip']
      next()
    } else {
      res.end()
    }
  }
}

module.exports = {
  isCloudflare,
  middleware,
  trustProxy,
}
