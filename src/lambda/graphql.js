const { ApolloServer, gql } = require("apollo-server-lambda");

const sushantData = [
  {
    name: "sushant singh",
    course: "B.tech",
    contact: 123
  }
];

const typeDefs = gql`
  type Sushant {
    name: String!
    course: String!
    contact: Int
  }
  type Query {
    me: [Sushant]
  }
`;

const resolvers = {
  Query: {
    me: (root, args, context) => {
      return sushantData;
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
});

exports.handler = server.createHandler({
  cors: {
    origin: "*",
    credentials: true
  }
});
