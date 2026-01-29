import { Router } from "express";
import {
  create,
  deleteUser,
  getUser,
  getUserById,
  updateUser,
} from "../controllers/user.controller";

const router = Router();

router.get("/", getUser);

router.get("/:id", getUserById);

router.post("/", create);

router.patch("/:id", updateUser);

router.delete("/:id", deleteUser);
export default router;
