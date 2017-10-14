const rangeCheck = require("range_check");
const ranges = require("./ranges");

module.exports = function(options){
  return function(req, res, next) {
    ip = req.ip;
    if(ip.startsWith("::ffff:"))
      ip = ip.substr(7);
    if(rangeCheck.inRange(ip, ranges)){
      req.origin_ip = req.headers['cf-connecting-ip'];
      next();
    }else{
      res.end();
    }
  };
};
