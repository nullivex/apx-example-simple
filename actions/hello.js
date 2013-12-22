'use strict';
exports.name = 'hello'
exports.description = 'hello action'
exports.run = function(apx,req,res,next){
  res.send('hello!')
  next()
}