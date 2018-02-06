import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull
  } from 'graphql';
  
  export default new GraphQLInputObjectType({
    name: 'UserAddType',
    fields: {
      id: {
        type: GraphQLID
      },
      username: {
        type: GraphQLString
      },
      password: {
        type: GraphQLString
      }
    }
  });