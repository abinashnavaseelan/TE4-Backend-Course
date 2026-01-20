import express, { type Request, type Response } from "express";
import userRoutes from "./routes/user.routes";
import productRoutes from "./routes/product.routes";
export const createApp = () => {
  const app = express();

  // Global middleware (runs on every request)
  app.use(express.json());
  // * Routes
  app.use("/api/users", userRoutes);
  app.use("/api/products", productRoutes);

  // * Health check (quick way to verify if the server is alive)
  app.get("/health", (req: Request, res: Response) => {
    res.status(200).json({ status: "OK", time: new Date().toISOString() });
  });

  return app;
};
