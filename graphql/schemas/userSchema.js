
export const userSchema = `#graphql
   type User {
    id: ID!
    name: String!
    email: String!
    age: String
  }

  extend type Query {
    getUser(id: ID!): User
    getUsers: [User]
  }

  extend type Mutation {
    createUser(name: String!, email: String!, age: String): User
    updateUser(id: ID!, name: String, email: String, age: String): User
    deleteUser(id: ID!): User
  }
`;
