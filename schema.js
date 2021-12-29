const { gql } = require("apollo-server")

module.exports = gql`
	type ToDo {
		id: ID!
		text: String
		isComplete: Boolean
	}
	type ErrorToDoNotFound {
		message: String
	}
	union ToDoResult = ToDo | ErrorToDoNotFound
	type Query {
		todoById(id: ID): ToDoResult
		todos: [ToDo]
		todosByIsComplete(isComplete: Boolean): [ToDo]
	}
	type Mutation {
		addNewToDo(todo: ToDoInput): ToDo
		toggleToDoIsComplete(id: ID): ToDoResult
		updateToDoText(id: ID, text: String): ToDoResult
		deleteToDo(id: ID): ToDoResult
	}
	input ToDoInput {
		text: String
		isComplete: Boolean
	}
`
