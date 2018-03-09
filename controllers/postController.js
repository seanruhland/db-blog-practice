var mongoose = require('mongoose');
var Post = mongoose.model('Post');

exports.newPost = function(req, res){
	var post = new Post({
		author: req.body.author,
		text: req.body.text
	})
	post.save(function(err, post) {
		if (err) {
			return res.json({message:'could not save post'})
		}
		res.json(post)
	})
}

exports.getPost = function(req,res) {
	Post
	.findOne({ _id: req.params.id})
	.populate('author')
	.exec(function(error, post) {
		if(error) {return  res.json({message:'error executing user'})};
		console.log(post)
	})
} 
