import Product from "../../models/Product.js";

const productResolvers = {
  Query: {
    getProduct: async (_, { id }) => {
      try {
        const product = await Product.findById(id);
        return product;
      } catch (err) {
        throw new Error("Error retrieving product");
      }
    },
    getProducts: async () => {
      try {
        console.log("getProducts call")
        const products = await Product.find();
        return products;
      } catch (err) {
        throw new Error("Error retrieving products");
      }
    },
  },
  Mutation: {
    createProduct: async (_, { name, description }) => {
      try {
        const product = new Product({ name, description });
        await product.save();
        return product;
      } catch (err) {
        throw new Error("Error creating product");
      }
    },
    updateProduct: async (_, { id, name, description }) => {
      try {
        const product = await Product.findByIdAndUpdate(
          id,
          { name, description },
          { new: true }
        );
        return product;
      } catch (err) {
        throw new Error("Error updating product");
      }
    },
    deleteProduct: async (_, { id }) => {
      try {
        const product = await Product.findByIdAndDelete(id);
        return product;
      } catch (err) {
        throw new Error("Error deleting product");
      }
    },
  },
};

export default productResolvers;
