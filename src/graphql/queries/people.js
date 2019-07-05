import { GraphQLList } from "graphql";

import PersonObject from "./../objects/person";

export default {
  type: new GraphQLList(PersonObject),
  resolve() {}
};
