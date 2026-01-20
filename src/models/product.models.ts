import mongoose from "mongoose";

export interface ProductDocument {
  name: string;
  price: number;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new mongoose.Schema<ProductDocument>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

export const Product = mongoose.model<ProductDocument>(
  "Product",
  productSchema
);
