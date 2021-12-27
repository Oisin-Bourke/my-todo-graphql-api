const { ApolloServer, ApolloError } = require("apollo-server")
const ToDoAPI = require("./data_sources/todos")

const typeDefs = require("./schema.js")
const resolvers = require("./resolvers.js")

const dataSources = () => ({
	toDoAPI: new ToDoAPI(),
})

const server = new ApolloServer({
	typeDefs,
	resolvers,
	dataSources,
	introspection: true,
	playground: true,
	//Global error handling
	formatError: (err) => {
		console.log(err)
		if(err.extensions.code === "INTERNAL_SERVER_ERROR") {
			return new ApolloError("We are having some trouble :( ", "INTERNAL_SERVER_ERROR")
		}
		return err
	}
})

server
	.listen({ port: process.env.PORT || 4000 })
	.then(({ url }) => {
		console.log(`GraphQl Apollo Server running at ${url}`)
	})
	.catch(() => console.log(`Error. Faied to connect to Apollo Server.`))
