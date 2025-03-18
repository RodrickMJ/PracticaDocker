const User = require("../models/userModel");

const createUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

const authenticateUser = async (email, password) => {
  const user = await User.findOne({ email, password });
  if (!user) throw new Error("Credenciales inválidas");
  return user;
};

const getUserById = async (id) => {
  return await User.findById(id);
};

const getUsers = async () => {
  return await User.find({});
};

module.exports = { createUser, authenticateUser, getUserById, getUsers };