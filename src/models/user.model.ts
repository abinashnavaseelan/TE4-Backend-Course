import mongoose from "mongoose";
import { z } from "zod";
import { required } from "zod/mini";

export interface User {
  name: string;
  email: string;
  age: number;
}
export const userZodSchema = z.object({
  body: z.object({
    name: z.string("not valid").min(2),
    email: z.email("not valid"),
    age: z.number("not valid").min(0),
  }),
});

export type CreateUserTypeZ = z.infer<typeof userZodSchema>["body"];

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
  },
  { timestamps: true },
);
export const UserModel = mongoose.model<User>("User", userSchema);
