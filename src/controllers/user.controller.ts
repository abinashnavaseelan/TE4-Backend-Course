import { type Request, type Response } from "express";
import {
  createUser,
  deleteUserService,
  findAll,
  findById,
  updateUserService,
} from "../services/user.service";

export const create = async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send({ message: (error as Error).message });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const users = await findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send({ message: (error as Error).message });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await findById(req.params.id as string);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).send({ message: (error as Error).message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const updatedUser = await updateUserService(
      req.params.id as string,
      req.body,
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).send({ message: (error as Error).message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const result = await deleteUserService(req.params.id as string);
    if (!result) {
      return res.status(404).json({ msg: "Not found" });
    }
    res.status(200).json({ msg: "Deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: (error as Error).message });
  }
};
