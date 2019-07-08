import { GraphQLList } from "graphql";

import PersonObject from "./../objects/person";
import Person from "../../models/Person";

export default {
  type: new GraphQLList(PersonObject),
  resolve: async () => {
    const result = await Person.find({});
    return result;
  }
};
