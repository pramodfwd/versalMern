import mongoose from "mongoose";
const { Schema } = mongoose;

const usersSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  maidenName: { type: String },
  age: { type: Number },
  gender: { type: String },
  email: { type: String },
  phone: { type: String },
  username: { type: String },
  password: { type: String },
  image: { type: String },
});

export const User = mongoose.model("User", usersSchema);
