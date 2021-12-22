const { gql } = require("apollo-server")

module.exports = gql`
	type ToDo {
		id: ID!
		text: String
		isComplete: Boolean
	}
	type Query {
		todos: [ToDo]
	}
`
