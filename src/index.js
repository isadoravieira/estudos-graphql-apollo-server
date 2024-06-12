import { ApolloServer } from "apollo-server";
import { resolvers, typeDefs } from "./graphql/schema";

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
});

server.listen(4003).then(({url}) => {
    console.log(`Server listening in url ${url}`);
});
