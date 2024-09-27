export const productSchema = `#graphql
  type Product {
    id: ID!
    name: String!
    description: String!
  }

  type Query {
    getProduct(id: ID!): Product
    getProducts: [Product]
  }

  type Mutation {
    createProduct(name: String!, description: String!): Product
    updateProduct(id: ID!, name: String, description: String!,): Product
    deleteProduct(id: ID!): Product
  }
`;
