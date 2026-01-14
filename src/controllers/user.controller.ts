import { type Request, type Response } from "express";

export const getUsers = (req: Request, res: Response): void => {
  const users = [
    {
      id: 1,
      name: "Ichigo Kurosaki",
      job: "Substitute Soul Reaper",
      bankai: "Tensa Zangetsu",
    },
    {
      id: 2,
      name: "Rukia Kuchiki",
      job: "Soul Reaper",
      bankai: "Hakka no Togame",
    },
    {
      id: 3,
      name: "Byakuya Kuchiki",
      job: "Captain of the 6th Division of Soul Society",
      bankai: "Senbonzakura Kageyoshi",
    },
  ];
  res.status(200).json(users);
};
