module.exports = {
	toggleToDoIsComplete: (parent, { id }, { dataSources }, info) => {
		return dataSources.toDoAPI.toggleToDoIsComplete(id)
	},
	updateToDoText: (parent, { id, text }, { dataSources }, info) => {
		return dataSources.toDoAPI.updateToDoText(id, text)
	},
	addNewToDo: (parent, { todo }, { dataSources }, info) => {
		return dataSources.toDoAPI.addNewToDo(todo)
	},
	deleteToDo: (parent, { id }, { dataSources }, info) => {
		return dataSources.toDoAPI.deleteToDo(id)
	},
}
