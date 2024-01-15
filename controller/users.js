import { User } from "../modal/users.js";

export const createUsers = async (req, res) => {
  const user = new User(req.body);
  const saveUser = await user.save();
  console.log(saveUser);
  res.status(201).json(req.body);
};

export const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

export const getUsersById = async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  res.json(user);
};

export const replaceUsers = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findOneAndReplace({ _id: id }, req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateUsers = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteUsers = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findOneAndDelete({ _id: id });
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};
