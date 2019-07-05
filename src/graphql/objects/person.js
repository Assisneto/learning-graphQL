import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export default new GraphQLObjectType({
  name: "Person",
  description: "Define a Person object",
  fields() {
    return {
      id: {
        type: GraphQLID,
        description: "unique ID",
        resolve: () => "2"
      },
      name: {
        type: GraphQLString,
        description: "Person name",
        resolve: () => "Assisneto"
      }
    };
  }
});
