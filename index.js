const rangeCheck = require("range_check");
const ranges = require("./ranges");

module.exports = function(req, res, next) {
  if(rangeCheck.inRange(req.ip, ranges)){
    req.ip = req.headers['cf-connecting-ip'];
    next()
  }else{
    res.end()
  }
};
