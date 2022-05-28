import type { Request, Response } from "express";
import { fruits } from "../data/dataC1";

export const case01 = (_req: Request, res: Response) => {
  console.log("Case 01");

  /** QUESTION 1 */
  /** array of fruit names */
  const fruitNames = fruits.map((fruit) => fruit.fruitName);

  /** QUESTION 2 */
  /** list of fruit type */
  /** use Set to filter duplicate fruitType */
  /** and turn it back to array using Array.from method */
  const fruitTypes = Array.from(
    new Set(fruits.map((fruit) => fruit.fruitType))
  );

  /** number of basket for each fruit type */
  const numberOfFruitBaskets = fruitTypes.length;

  /** list of fruit on each basket base on it's type */
  /** create type for "fruitByTypes" variable
   ** this type use value of "fruitTypes" array as key
   ** and type of "fruits" as type of the value
   */
  type FruitByTypes = {
    [K in typeof fruitTypes[number]]: typeof fruits;
  };

  /** using reduce array method :
   *  - create object, using the value of "fruitTypes" array as a key.
   *  - that object contain filtered "fruits" by it's type.
   *  - use empty object as initial value for reduce method
   */
  const fruitByTypes = fruitTypes.reduce(
    (prevVal, currVal) => ({
      ...prevVal,
      [currVal]: fruits.filter((fruit) => fruit.fruitType === currVal),
    }),
    {}
  ) as FruitByTypes;

  /** QUESTION 3 */
  /** total stock in each basket */
  /** use reduce to create object,
   ** using the value of "fruitTypes" array as a key.
   ** each key in that object will return total stock.
   ** sum total stock with reduce method (0 as initial value).
   */
  const stockOnEachBasket = fruitTypes.reduce(
    (prevVal, currVal) => ({
      ...prevVal,
      [currVal]: fruitByTypes[currVal].reduce((pv, cv) => pv + cv.stock, 0),
    }),
    {}
  );

  return res.render("case01", {
    title: "Case 01 |",
    Q1: { fruitNames },
    Q2: { fruitTypes, numberOfFruitBaskets, fruitByTypes },
    Q3: { stockOnEachBasket },
  });
};
