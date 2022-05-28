import type { Request, Response } from "express";
import { fruits } from "../data/dataC1";

export const case01 = (req: Request, res: Response) => {
  console.log("Case 01");

  /** QUESTION 1 */
  /** array of fruit names */
  const fruitNames = fruits.map((fruit) => fruit.fruitName);

  /** QUESTION 2 */
  /** list of fruit type */
  const fruitTypes = Array.from(
    new Set(fruits.map((fruit) => fruit.fruitType))
  );
  /** number of basket for each fruit type */
  const numberOfFruitBaskets = fruitTypes.length;
  /** list of fruit on each basket base on it's type */
  // const fruitByTypes = fruitTypes.map((ftype) => ({
  //   [ftype]: fruits.filter((fruit) => fruit.fruitType === ftype),
  // }));
  const fruitByTypes = fruitTypes.map((ftype) =>
    fruits.filter((fruit) => fruit.fruitType === ftype)
  );

  /** QUESTION 3 */
  /** total stock in each basket */
  const stockOnEachBasket = fruitByTypes.map((ftype, index) => {
    /** use fruitTypes[index] as object key
     ** use array.reduce function to sum total stock
     ** with 0 as initial value
     */
    // return ftype[fruitTypes[index]].reduce(
    //   (prevVal, currVal) => prevVal + currVal.stock,
    //   0
    // );
    return ftype.reduce(
      (prevVal, currVal) => prevVal + currVal.stock,
      0
    );
  });

  return res.json({
    Q1: { fruitNames },
    Q2: { fruitTypes, numberOfFruitBaskets, fruitByTypes },
    Q3: { stockOnEachBasket },
  });
};
