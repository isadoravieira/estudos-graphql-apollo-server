import { gql } from "apollo-server"
import { userTypeDefs } from "./user/typeDefs";
import { userResolver } from "./user/resolvers";
import { postTypeDefs } from "./post/typeDefs";
import { postResolver } from "./post/resolvers";

const rootTypeDefs = gql`
  type Query {
    _empty: Boolean
  }
`;

const rootResolvers = {
  Query: {
    _empty: () => true
  },
};

export const typeDefs = [rootTypeDefs, userTypeDefs, postTypeDefs];
export const resolvers = [rootResolvers, userResolver, postResolver];
