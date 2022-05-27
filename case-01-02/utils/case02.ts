import type { Request, Response } from "express";

export const case02 = (req: Request, res: Response) => {
  console.log("Case 01");


  return res.send("hello world from case 2");
};
