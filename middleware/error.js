const winston = require('winston');

module.exports=function(err,req,res,next){
    winston.error(err.message,{metadata:{prop: err}});

    res.status(500).send('Something failed...');
}