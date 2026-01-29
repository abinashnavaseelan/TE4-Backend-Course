import { NextFunction, type Request, type Response } from "express";
import {
  createProduct,
  deleteProductService,
  findAll,
  findById,
  updateProductService,
} from "../services/product.service";
import { CreateProductTypeZ } from "../models/product.model";

export const create = async (
  req: Request<{}, {}, CreateProductTypeZ>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { name, prise, description } = req.body;
    const product = await createProduct(name, prise, description);
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};

export const getProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const users = await findAll();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id as string;
    const user = await findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id as string;
    const changes = req.body;
    const updatedUser = await updateProductService(id, changes);
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id as string;
    await deleteProductService(id);

    res.status(200).json({ msg: "Deleted successfully" });
  } catch (error) {
    next(error);
  }
};
