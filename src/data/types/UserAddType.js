import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull
  } from 'graphql';
  
  export default new GraphQLInputObjectType({
    name: 'UserAddType',
    fields: {
      username: {
        type: GraphQLString
      },
      password: {
        type: GraphQLString
      }
    }
  });