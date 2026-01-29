import { Router } from "express";
import {
  loginControler,
  regiseterControler,
} from "../controllers/auth.controller";

const router = Router();

router.post("/register", regiseterControler);

router.post("/login", loginControler);

export default router;
