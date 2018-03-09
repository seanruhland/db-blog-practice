var mongoose = require('mongoose')
var Schema = mongoose.Schema

var postSchema = new Schema({
	author: {
		type: Schema.Types.ObjectId,
		ref: 'Post'
	},
	title: String,
	tags: Array,
	text: String,
	created: {
		type: Date,
		default: Date.now(),
	},
})

module.exports = mongoose.model('Post', postSchema)