// @flow

import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: new GraphQLNonNull(GraphQLString),
        resolve() {
          return 'world';
        }
      }
    }
  })
});
