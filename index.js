const rangeCheck = require("range_check");
const ranges = require("./ranges");

module.exports = function(options){
  return function(req, res, next) {
    if(req.ip.startsWith("::ffff:"))
      req.ip = req.ip.substr(7);
    if(rangeCheck.inRange(req.ip, ranges)){
      req.ip = req.headers['cf-connecting-ip'];
      next();
    }else{
      res.end();
    }
  };
};
