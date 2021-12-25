module.exports = {
	todos: (parent, args, { dataSources }, info) => {
		return dataSources.toDoAPI.getToDos()
	},
	todoById: (parent, { id }, { dataSources }, info) => {
		return dataSources.toDoAPI.getToDoById(id)
	},
	todosByIsComplete: (parent, { isComplete }, { dataSources }, info) => {
		return dataSources.toDoAPI.getToDosByIsComplete(isComplete)
	},
}
