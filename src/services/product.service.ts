import { Product, ProductDocument } from "../models/product.model";

const products: ProductDocument[] = [];

export function findAll(): ProductDocument[] {
  return products;
}

export function create(
  productData: Omit<ProductDocument, "id">,
): ProductDocument {
  const newProduct: ProductDocument = {
    ...productData
    id: Date.now(), // Use number if ProductDocument.id is a number, or keep .toString() if it's a string
  };
  products.push(newProduct);
  return newProduct;
}
