import  productResolvers from './ProductResolvers.js'
import userResolvers from './UserResolvers.js'

const resolvers = {
    Query: {
        ...userResolvers.Query,
        ...productResolvers.Query
    },
    Mutation: {
        ...userResolvers.Mutation,
        ...productResolvers.Mutation
    }
}

export { resolvers }