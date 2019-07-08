import { GraphQLInputObjectType, GraphQLString } from "graphql";

export default new GraphQLInputObjectType({
  name: "people-input",
  fields: () => ({
    name: { type: GraphQLString }
  })
});
