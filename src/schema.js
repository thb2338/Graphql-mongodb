import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
  GraphQLString,
} from 'graphql'

import { mes, mepage, del, add, update } from './data/queries/user'

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'world'
        },
      },
      mes,
      mepage,
      del,
    },
  }),

  mutation: new ObjectType({
    name: 'Mutation',
    fields: {
      add,
      update,
    },
  }),
})

export default schema
