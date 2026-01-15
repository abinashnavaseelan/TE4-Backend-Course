import { type Request, type Response } from "express";
export const getProducts = (req: Request, res: Response): void => {
  const products = [
    {
      id: 1,
      name: "Kon",
      type: "Mod-Soul",
      abilities: ["Enhanced Strength", "Agility", "Durability"],
    },
    {
      id: 2,
      name: "Tama",
      type: "Mod-Soul",
      abilities: ["Enhanced Speed", "Stealth", "Flexibility"],
    },
    {
      id: 3,
      name: "Denkou",
      type: "Mod-Soul",
      abilities: ["Electric Manipulation", "Speed Boost", "Shock Resistance"],
    },
  ];
  res.status(200).json(products);
};
