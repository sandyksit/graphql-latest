import { userSchema } from "./userSchema.js";
import { productSchema } from "./productSchema.js";

const typeDefs = [productSchema, userSchema];

export { typeDefs };
