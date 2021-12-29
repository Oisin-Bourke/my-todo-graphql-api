const { DataSource } = require("apollo-datasource")
const db = require("../_helpers/db")

const ToDo = db.ToDo

class ToDoAPI extends DataSource {
	constructor() {
		super()
	}

	initialize(config) {}

	async getToDoById(id) {
		return await ToDo.findById(id).exec()
	}

	async getToDos() {
		return await ToDo.find().exec()
	}

	async getToDosByIsComplete(isComplete) {
		return await ToDo.find({ isComplete: isComplete }).exec()
	}

	async addNewToDo(todo) {
		const newTodo = new ToDo({
			text: todo.text,
			isComplete: todo.isComplete,
		})
		return await ToDo.create(newTodo)
	}

	async toggleToDoIsComplete(id) {
		const todo = await ToDo.findById(id).exec()
		if (!todo) return todo
		todo.isComplete = !todo.isComplete
		await todo.save()
		return todo
	}

	async updateToDoText(id, text) {
		const todo = await ToDo.findById(id).exec()
		if (!todo) return todo
		todo.text = text
		await todo.save()
		return todo
	}

	async deleteToDo(id) {
		return await ToDo.findByIdAndDelete(id)
	}
}

module.exports = ToDoAPI
