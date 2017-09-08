## Valid

```
cd test_1
yarn flow check
```

Output:

```
▲ test_1 at master ✖ yarn flow check
yarn flow v1.0.1
warning package.json: No license field
$ "/Users/mrtnzlml/Work/kiwi-private/kiwi-chatbot-infrastructure/graphql-rename/test_1/node_modules/.bin/flow" "check"
Found 0 errors
✨  Done in 2.88s.
```

## Error

```
cd ../test_2
yarn flow check
```

> You can also try `test_3`. It's same as `test_2` but fixed.

Output:

```
▲ test_1 at master ✖ yarn flow check
yarn flow v1.0.1
warning package.json: No license field
$ "/Users/mrtnzlml/Work/kiwi-private/kiwi-chatbot-infrastructure/graphql-rename/test_1/node_modules/.bin/flow" "check"
Error: index.js:11
              v----------------------
 11:   query: new GraphQLObjectType({
 12:     name: 'RootQueryType',
 13:     fields: {
...:
 16:   })
       -^ constructor call
  9:   type: new GraphQLNonNull(GraphQLString),
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ GraphQLNonNull. This type is incompatible with. See: hello.js:9
649:   type: GraphQLOutputType;
             ^^^^^^^^^^^^^^^^^ union: GraphQLScalarType | GraphQLObjectType | GraphQLInterfaceType | GraphQLUnionType | GraphQLEnumType | type application of class `GraphQLList` | type application of class `GraphQLNonNull`. See: node_modules/graphql/type/definition.js.flow:649
  Member 1:
  108:   GraphQLScalarType |
         ^^^^^^^^^^^^^^^^^ GraphQLScalarType. See: node_modules/graphql/type/definition.js.flow:108
  Error:
    9:   type: new GraphQLNonNull(GraphQLString),
               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ GraphQLNonNull. This type is incompatible with. See: hello.js:9
  108:   GraphQLScalarType |
         ^^^^^^^^^^^^^^^^^ GraphQLScalarType. See: node_modules/graphql/type/definition.js.flow:108
  Member 2:
  109:   GraphQLObjectType |
         ^^^^^^^^^^^^^^^^^ GraphQLObjectType. See: node_modules/graphql/type/definition.js.flow:109
  Error:
    9:   type: new GraphQLNonNull(GraphQLString),
               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ GraphQLNonNull. This type is incompatible with. See: hello.js:9
  109:   GraphQLObjectType |
         ^^^^^^^^^^^^^^^^^ GraphQLObjectType. See: node_modules/graphql/type/definition.js.flow:109
  Member 3:
  110:   GraphQLInterfaceType |
         ^^^^^^^^^^^^^^^^^^^^ GraphQLInterfaceType. See: node_modules/graphql/type/definition.js.flow:110
  Error:
    9:   type: new GraphQLNonNull(GraphQLString),
               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ GraphQLNonNull. This type is incompatible with. See: hello.js:9
  110:   GraphQLInterfaceType |
         ^^^^^^^^^^^^^^^^^^^^ GraphQLInterfaceType. See: node_modules/graphql/type/definition.js.flow:110
  Member 4:
  111:   GraphQLUnionType |
         ^^^^^^^^^^^^^^^^ GraphQLUnionType. See: node_modules/graphql/type/definition.js.flow:111
  Error:
    9:   type: new GraphQLNonNull(GraphQLString),
               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ GraphQLNonNull. This type is incompatible with. See: hello.js:9
  111:   GraphQLUnionType |
         ^^^^^^^^^^^^^^^^ GraphQLUnionType. See: node_modules/graphql/type/definition.js.flow:111
  Member 5:
  112:   GraphQLEnumType |
         ^^^^^^^^^^^^^^^ GraphQLEnumType. See: node_modules/graphql/type/definition.js.flow:112
  Error:
    9:   type: new GraphQLNonNull(GraphQLString),
               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ GraphQLNonNull. This type is incompatible with. See: hello.js:9
  112:   GraphQLEnumType |
         ^^^^^^^^^^^^^^^ GraphQLEnumType. See: node_modules/graphql/type/definition.js.flow:112
  Member 6:
  113:   GraphQLList<GraphQLOutputType> |
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ type application of class `GraphQLList`. See: node_modules/graphql/type/definition.js.flow:113
  Error:
    9:   type: new GraphQLNonNull(GraphQLString),
               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ GraphQLNonNull. This type is incompatible with. See: hello.js:9
  113:   GraphQLList<GraphQLOutputType> |
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ GraphQLList. See: node_modules/graphql/type/definition.js.flow:113
  Member 7:
         v--------------
  114:   GraphQLNonNull<
  115:     GraphQLScalarType |
  116:     GraphQLObjectType |
  ...:
  121:   >;
         ^ type application of class `GraphQLNonNull`. See: node_modules/graphql/type/definition.js.flow:114
  Error:
  116:     GraphQLObjectType |
           ^^^^^^^^^^^^^^^^^ GraphQLObjectType. This type is incompatible with. See: node_modules/graphql/type/definition.js.flow:116
    9:   type: new GraphQLNonNull(GraphQLString),
                                  ^^^^^^^^^^^^^ GraphQLScalarType. See: hello.js:9


Found 1 error
error Command failed with exit code 2.
```
