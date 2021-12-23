const mongoose = require("mongoose")
const Schema = mongoose.Schema

const todoSchema = new Schema({
	text: { type: String, required: true },
	isComplete: { type: Boolean, requird: true },
})

todoSchema.set("toJSON", { virtuals: true })
module.exports = mongoose.model("ToDo", todoSchema)
