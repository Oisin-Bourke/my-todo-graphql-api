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
		todos: [ToDo]
		todoById(id: ID): ToDoResult
		todosByIsComplete(isComplete: Boolean): [ToDo]
	}
	type Mutation {
		toggleToDoIsComplete(id: ID): ToDo
		updateToDoText(id: ID, text: String): ToDo
		addNewToDo(todo: ToDoInput): ToDo
		deleteToDo(id: ID): ToDo
	}
	input ToDoInput {
		text: String
		isComplete: Boolean
	}
`
