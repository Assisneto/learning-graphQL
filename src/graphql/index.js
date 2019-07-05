import { GraphQLSchema, GraphQLObjectType } from "graphql";

export default new GraphQLSchema({
  query: GraphQLObjectType({
    name: "Query",
    fields: queries
  }),
  mutation: GraphQLObjectType({
    name: "Mutation",
    fields: mutations
  })
});
