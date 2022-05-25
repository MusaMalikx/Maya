var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var userSchema = new Schema({
	email : {
		type: String,
		required: true,
		unique: true
	},
	password : {
		type: String,
		required: true
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
	}
}, { timestamps: true });

module.exports = mongoose.model('user', userSchema);
