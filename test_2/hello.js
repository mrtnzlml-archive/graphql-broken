// @flow

import {
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

export default {
  type: new GraphQLNonNull(GraphQLString),
  resolve() {
    return 'world';
  }
};
