var Book = require("../models/Book.js");
var ObjectId = require("mongodb").ObjectId;

//显示首页，列出所有图书
exports.showIndex= function(req,res, next){
	Book.liechusuoyoushu(function(err,result){
		res.render("index",{
		"test": result
	});

	})

}

exports.addbook = function(req, res, next){
	res.render("addbook");
}

exports.doadd = function(req, res, next){
	Book.create(req.query,function(err){
		if(err){
			res.send("fail");
		}
		res.send("save success!");
	});
}

//修改界面
exports.edit = function(req, res, next){
	Book.findBookByname(req.query.name,function(err,result){
		res.render("edit",result[0]);
	})
}

exports.doedit= function(req, res, next){
	Book.update(req.query.name,function(err){
		if(err){
			res.send("fail");
		}
		res.send("save success!");
	});
}