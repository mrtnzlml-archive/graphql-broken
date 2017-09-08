// @flow

import {
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';

import hello from './hello';

new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: hello
    }
  })
});
