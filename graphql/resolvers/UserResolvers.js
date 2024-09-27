import User from "../../models/User.js";

const userResolvers = {
  Query: {
    getUser: async (_, { id }) => {
      try {
        const user = await User.findById(id);
        return user;
      } catch (err) {
        throw new Error("Error retrieving user");
      }
    },
    getUsers: async () => {
      try {
        const users = await User.find();
        return users;
      } catch (err) {
        throw new Error("Error retrieving users");
      }
    },
  },
  Mutation: {
    createUser: async (_, { name, email, age }) => {
      try {
        const user = new User({ name, email, age });
        await user.save();
        return user;
      } catch (err) {
        throw new Error("Error creating user");
      }
    },
    updateUser: async (_, { id, name, email, age }) => {
      try {
        const user = await User.findByIdAndUpdate(
          id,
          { name, email, age },
          { new: true }
        );
        return user;
      } catch (err) {
        throw new Error("Error updating user");
      }
    },
    deleteUser: async (_, { id }) => {
      try {
        const user = await User.findByIdAndDelete(id);
        return user;
      } catch (err) {
        throw new Error("Error deleting user");
      }
    },
  },
};

export  default userResolvers;
