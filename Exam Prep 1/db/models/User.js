const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
	email: { type: String, required: true, unique: true },
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	bookedHotels: Array,
	offeredHotels: Array,
})

const User = mongoose.model('User', UserSchema)

module.exports = User