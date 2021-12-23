const { DataSource } = require("apollo-datasource")
const db = require("../_helpers/db")

const ToDo = db.ToDo

class ToDoAPI extends DataSource {
	constructor() {
		super()
	}

	initialize(config) {}

	async getToDos() {
		return await ToDo.find({})
	}
}

module.exports = ToDoAPI

const mockData = [
	{
		id: 1,
		text: "Something to do one...",
		isComplete: false,
	},
	{
		id: 2,
		text: "Something to do two...",
		isComplete: false,
	},
	{
		id: 3,
		text: "Something to do three...",
		isComplete: false,
	},
]
