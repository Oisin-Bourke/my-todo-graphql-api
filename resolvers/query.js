const { ApolloError } = require("apollo-server")

module.exports = {
	todoById: async (parent, { id }, { dataSources }, info) => {
		const todo = await dataSources.toDoAPI.getToDoById(id)
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
	todos: (parent, args, { dataSources }, info) => {
		return dataSources.toDoAPI.getToDos()
	},
	todosByIsComplete: (parent, { isComplete }, { dataSources }, info) => {
		return dataSources.toDoAPI.getToDosByIsComplete(isComplete)
	},
}
