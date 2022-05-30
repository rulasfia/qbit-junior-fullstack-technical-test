import type { Request, Response } from "express";
import { fruits } from "../data/dataC1";

/** type of fruit.fruitType */
type IFruitType = typeof fruits[number]["fruitType"];

/** list of fruit on each basket base on it's type */
/** create type for "fruitByTypes" variable
 ** this type use value of "fruitTypes" array as key
 ** and type of "fruits" as type of the value
 */
type FruitByTypes = {
  [K in IFruitType[number]]: typeof fruits;
};

/** QUESTION 1 */
/** array of fruit names */
const getFruitNames = (fData: typeof fruits) => {
  return fData.map((fruit) => fruit.fruitName);
};

/** QUESTION 2 */
/** list of fruit type */
/** use Set to filter duplicate fruitType */
/** and turn it back to array using Array.from method */
const getFruitTypes = (fData: typeof fruits) => {
  return Array.from(new Set(fData.map((fruit) => fruit.fruitType)));
};

/** number of basket for each fruit type */
const getTotalBaskets = (fTypes: IFruitType[]) => {
  return fTypes.length;
};

/** using reduce array method :
 *  - create object, using the value of "fruitTypes" array as a key.
 *  - that object contain filtered "fruits" by it's type.
 *  - use empty object as initial value for reduce method
 */
const getFruitByTypes = (fTypes: IFruitType[]): FruitByTypes => {
  return fTypes.reduce(
    (prevVal, currVal) => ({
      ...prevVal,
      [currVal]: fruits.filter((fruit) => fruit.fruitType === currVal),
    }),
    {}
  );
};

/** QUESTION 3 */
/** total stock in each basket */
/** use reduce to create object,
 ** using the value of "fruitTypes" array as a key.
 ** each key in that object will return total stock.
 ** sum total stock with reduce method (0 as initial value).
 */
const getStockOnEachBasket = (fTypes: IFruitType[], fByTypes: FruitByTypes) => {
  return fTypes.reduce(
    (prevVal, currVal) => ({
      ...prevVal,
      [currVal]: fByTypes[currVal].reduce((pv, cv) => pv + cv.stock, 0),
    }),
    {}
  );
};

export const case01 = (_req: Request, res: Response) => {
  console.log("Case 01");

  const fruitNames = getFruitNames(fruits);
  const fruitTypes = getFruitTypes(fruits);
  const numberOfFruitBaskets = getTotalBaskets(fruitTypes);
  const fruitByTypes = getFruitByTypes(fruitTypes);
  const stockOnEachBasket = getStockOnEachBasket(fruitTypes, fruitByTypes);

  return res.render("case01", {
    title: "Case 01 |",
    Q1: { fruitNames },
    Q2: { fruitTypes, numberOfFruitBaskets, fruitByTypes },
    Q3: { stockOnEachBasket },
  });
};
