const mongoose = require("mongoose")
if (process.env.NODE_ENV !== 'production') {
    require("dotenv").config()
}

mongoose
	.connect(process.env.MONGO_DB_ATLAS, {})
	.then(() => console.log("Connected to Atlas MongoDB."))
	.catch((err) => console.log(err))

mongoose.Promise = global.Promise

module.exports = {
	ToDo: require("../model"),
}
