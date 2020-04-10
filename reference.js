var mongoose= require("mongoose");
mongoose.connect('mongodb://localhost:27017/postblog2',{useNewUrlParser:true});


var postSchema= new mongoose.Schema({
	title:String,
	content:String
});

var Post=mongoose.model("post",postSchema);

var userSchema= new mongoose.Schema({
	name:String,
	email:String,
	post:[{
		type:mongoose.Schema.Types.ObjectId,
		ref:"Post"
	}]
});

var User=mongoose.model("user",userSchema);

// Post.create({
// 	title:"Wasssup Harshpal",
// 	content:"Nothing Dad"
// },function(err,post){
// 	User.findOne({email:"shantanu@abc.com"} ,function(err,foundUser){
// 		if(err){
// 			console.log(err);
// 		}
// 		else{
// 			foundUser.post.push(post);
// 			foundUser.save(function(err,data){
// 				if(err){
// 					console.log(err);
// 				}
// 				else{
// 					console.log(data);
// 				}
// 			})
// 		}
// 	})
// });

User.findOne({email: "shantanu@abc.com"}).populate("post").exec(function(err,user){
	if(err){
		console.log(err);
	}
	else{
		console.log(user);
	}
});
// User.create({
// 	name:"shantanu",
// 	email:"shantanu@abc.com"
// })
