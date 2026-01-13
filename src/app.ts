import express, { type Request, type Response } from "express";
import { time } from "node:console";

export const createApp = () => {
  const app = express();

  // Global middleware (runs on every request)
  app.use(express.json());

  // Health check (quick way to verify if the server is alive)
  app.get("/health", (req: Request, res: Response) => {
    res.status(200).json({ status: "OK", time: new Date().toISOString() });
  });

  return app;
};
