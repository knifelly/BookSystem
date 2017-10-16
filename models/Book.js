var mongoose = require('mongoose');
var db = require("./db.js");
//结构
var bookSchema = new mongoose.Schema({
    name     : {type : String},
    author   : {type : String},
    price    : {type : Number},
});

//给chema增加几个方法
//列出suoyoutushu
bookSchema.statics.liechusuoyoushu= function(callback){
	this.model("Book").find({}, callback);

}
//根据id查找图书
bookSchema.statics.findBookByname=function(name,callback){
	this.model("Book").find({"name":name}, callback);
}

//模型， 模型需要用到schema
var bookModel = db.model('Book',bookSchema);
module.exports = bookModel;