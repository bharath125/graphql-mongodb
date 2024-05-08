const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const MONGODB =
  "mongodb+srv://bharath:Bharath%40125@cluster0.pk7d93z.mongodb.net/Graphql?retryWrites=true&w=majority&appName=Cluster0";

//ApolloServer
//Typedefs : GraphQL definitions
//Resolvers : How do we resolve queries/mutations

const typeDefs = require("./graphql/typeDefs.js");
const resolvers = require("./graphql/resolvers.js");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB connection successful");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });
