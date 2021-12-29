module.exports = {
	addNewToDo: (parent, { todo }, { dataSources }, info) => {
		return dataSources.toDoAPI.addNewToDo(todo)
	},
	toggleToDoIsComplete: async (parent, { id }, { dataSources }, info) => {
		const todo = await dataSources.toDoAPI.toggleToDoIsComplete(id)
		if (todo) {
			return {
				...todo.toJSON(),
				__typename: "ToDo",
			}
		}
		return {
			message: `The todo with id ${id} does not exist`,
			__typename: "ErrorToDoNotFound",
		}
	},
	updateToDoText: async (parent, { id, text }, { dataSources }, info) => {
		const todo = await dataSources.toDoAPI.updateToDoText(id, text)
		if (todo) {
			return {
				...todo.toJSON(),
				__typename: "ToDo",
			}
		}
		return {
			message: `The todo with id ${id} does not exist`,
			__typename: "ErrorToDoNotFound",
		}
	},
	deleteToDo: async (parent, { id }, { dataSources }, info) => {
		const todo = await dataSources.toDoAPI.deleteToDo(id)
		if (todo) {
			return {
				...todo.toJSON(),
				__typename: "ToDo",
			}
		}
		return {
			message: `The todo with id ${id} does not exist`,
			__typename: "ErrorToDoNotFound",
		}
	},
}
