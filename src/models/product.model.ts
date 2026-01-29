import mongoose from "mongoose";
import { z } from "zod";

export interface Product {
  name: string;
  prise: number;
  description: string;
}
export const ProductZodSchema = z.object({
  body: z.object({
    name: z.string("not valid").min(3),
    prise: z.number("not valid").min(1),
    description: z.string("not valid").min(0),
  }),
});

export type CreateProductTypeZ = z.infer<typeof ProductZodSchema>["body"];

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
  },
  { timestamps: true },
);
export const ProductModel = mongoose.model<Product>("Product", productSchema);
