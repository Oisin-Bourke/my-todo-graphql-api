const { DataSource } = require("apollo-datasource")

class ToDoAPI extends DataSource {
	constructor() {
		super()
	}

	initialize(config) {}

	getToDos() {
		return mockData
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
