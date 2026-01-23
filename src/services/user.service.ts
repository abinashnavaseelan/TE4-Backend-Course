import { UserModel, type User } from "../models/user.model";
import { AppError } from "../utils/app.error";

export const createUser = async (data: User): Promise<User> => {
  return await UserModel.create(data); //! this neds to be changed
};

export const findAll = async () => {
  const allUsers = await UserModel.find({});
  if (allUsers.length === 0) {
    throw new AppError("users not found", 404);
  }
  return;
};

export const findById = async (id: string) => {
  const user = await UserModel.findById(id);
  if (!user) {
    throw new AppError("user not found", 404);
  }

  return user;
};

export const updateUserService = async (
  id: string,
  updateData: Partial<User>,
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
