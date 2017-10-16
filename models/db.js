var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://localhost/test')
db.once('open',function(){
	console.log("数据库连接成功！");
});
module.exports=db;