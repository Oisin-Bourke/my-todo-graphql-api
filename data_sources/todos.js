const { DataSource } = require("apollo-datasource")
const db = require("../_helpers/db")

const ToDo = db.ToDo

class ToDoAPI extends DataSource {
	constructor() {
		super()
	}

	initialize(config) {}

	async getToDos() {
		return await ToDo.find().exec()
	}

	async getToDoById(id) {
		return await ToDo.findById(id).exec()
	}

	async getToDosByIsComplete(isComplete) {
		return await ToDo.find({ isComplete: isComplete }).exec()
	}

	async toggleToDoIsComplete(id) {
		const todo = await ToDo.findById(id).exec()
		todo.isComplete = !todo.isComplete
		await todo.save()
		return todo
	}

	async updateToDoText(id, text) {
		const todo = await ToDo.findById(id).exec()
		todo.text = text
		await todo.save()
		return todo
	}

	async addNewToDo(todo) {
		const newTodo = new ToDo({
			text: todo.text,
			isComplete: todo.isComplete
		})
		return await ToDo.create(newTodo)
	}

	async deleteToDo(id) {
		return await ToDo.findByIdAndDelete(id)
	}
}

module.exports = ToDoAPI
