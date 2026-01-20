import { Router } from "express";
import { getProducts } from "./../controllers/product.controller";

const router = Router();

router.get("/");
router.post("/", getProducts);
router.put("/", getProducts);

export default router;
