import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export default new GraphQLObjectType({
  name: "Person",
  description: "Define a Person object",
  fields() {
    return {
      id: {
        type: GraphQLID,
        description: "unique ID",
        resolve: person => person.id
      },
      name: {
        type: GraphQLString,
        description: "Person name",
        resolve: person => person.name
      }
    };
  }
});
