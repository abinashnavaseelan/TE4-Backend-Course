import express, { type Request, type Response } from "express";

export const createApp = (): express.Application => {
  const app = express();

  // Middleware
  app.use(express.json());

  // Routes
  app.get("/api/health", (req, res) => {
    res.status(200).json({ status: "ok" });
  });

  return app;
};
