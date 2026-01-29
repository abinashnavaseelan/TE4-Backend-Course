import { UserModel, User } from "../models/user.model";

export const createUser = async (data: User): Promise<User> => {
  return await UserModel.create(data);
};

export const findAll = async () => {
  return await UserModel.find({});
};

export const findById = async (id: string) => {
  const user = await UserModel.findById(id);
  console.log(user);
  return user;
};

export type UserDocument = typeof UserModel.prototype;

export const updateUserService = async (
  id: string,
  updateData: Partial<UserDocument>,
) => {
  const existingUser = await UserModel.findById(id);
  if (!existingUser) throw new Error("User not found...");
  const updatedUser = await UserModel.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });
  if (!updatedUser) throw new Error("User not found...");
  return updatedUser;
};

export const deleteUserService = async (id: string) => {
  const deletedUser = await UserModel.findByIdAndDelete(id);
  if (!deletedUser) throw new Error("User not found...");
  return deletedUser;
};
