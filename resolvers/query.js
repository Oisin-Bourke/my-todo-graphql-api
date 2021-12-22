module.exports = {
	todos: (parent, args, { dataSources }, info) => {
		return dataSources.toDoAPI.getToDos()
	},
}
