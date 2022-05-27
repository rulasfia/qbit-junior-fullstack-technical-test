import type { Request, Response } from "express";
import { fruits } from "../data/dataC1";

export const case01 = (req: Request, res: Response) => {
  console.log("Case 01");

  const question01 = fruits.map((fruit) => fruit.fruitName);
  const question02 = fruits.map((fruit) => fruit.fruitName);

  return res.send(question01);
};
