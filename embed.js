var mongoose= require("mongoose");
mongoose.connect('mongodb://localhost:27017/postblog',{useNewUrlParser:true});


var postSchema= new mongoose.Schema({
	title:String,
	content:String
});

var Post=mongoose.model("post",postSchema);

var userSchema= new mongoose.Schema({
	name:String,
	email:String,
	post:[postSchema]
});

var User=mongoose.model("user",userSchema);

var newUser = new User({
	name:"Krunal",
	email:"krunalk@edu.com"
});
// User.create({
// 	name:"Shantanu",
// 	emai:"shaksf@dk.com"
// })


newUser.post.push({
	title:"Babu",
	content:"MC movie"
});

newUser.save(function(err,user){
	if(err){
		console.log(err);
	}
	else{
		console.log(user);
	}
})
