var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	facebookId: {   //To store facebook id if logge in through Facebook
		type: String,
		default: ""
	},
	googleId: {   //To store google id if loged in through google
		type: String,
		//unique: true,
		default: ""
	},
	email: {
		type: String,
		//unique: true,  //we can not set this unique because if 2 people login with google id this needs to be kept empty using defalut so unique will not work
		default: ""
	},
	password: {
		type: String,
		default: ""
	},
	isAdmin: {
		type: Boolean,
		default: false
	},
	name: {
		type: String,
		required: true

	},
	lastname: {
		type: String,
		default: ""
	},
	company: {
		type: String,
		default: ""
	},
	street: {
		type: String,
		default: ""
	},
	state: {
		type: String,
		default: ""
	},
	country: {
		type: String,
		default: ""
	},
	telephone: {
		type: String,
		default: ""
	},
	picture: {
		type: String,
		default: ""
	},
	resetLink: {
		data: String,
		default: ""
	}
}, { timestamps: true });

module.exports = mongoose.model('user', userSchema);
