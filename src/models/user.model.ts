import mongoose from "mongoose";

export interface User {
  name: string;
  email: string;
  age: number;
}

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number },
  },
  { timestamps: true },
);
export const UserModel = mongoose.model<User>("User", userSchema);
