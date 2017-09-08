// @flow

import {
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

import type { GraphQLFieldConfig } from 'graphql';

export default ({
  type: new GraphQLNonNull(GraphQLString),
  resolve() {
    return 'world';
  }
}: GraphQLFieldConfig<mixed, mixed>);
