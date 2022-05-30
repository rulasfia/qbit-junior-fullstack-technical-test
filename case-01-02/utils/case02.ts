import type { Request, Response } from "express";
import { comments } from "../data/dataC2";

type IParamData = typeof comments | undefined;
type IParamAction = (data: IParamData) => number;

const sumSubcomment = (data: IParamData, action?: IParamAction) => {
  /** if no data provided or the data provided is 'falsy', return 0 */
  if (!data) return 0;
  /** if there is action function specfied, use it to get value from cv */
  if (action) return data.reduce((pv, cv) => pv + action(cv.replies), 0);
  /** if none of those, return replies array length */
  return data.reduce((pv, cv) => pv + (cv.replies ? cv.replies?.length : 0), 0);
};

export const case02 = (req: Request, res: Response) => {
  console.log("Case 02");

  /** sum total main-comment, sub-comment, and sub-subcomment */
  const MainComments = comments.length;
  const SubComments = sumSubcomment(comments);
  const SubSubcomments = sumSubcomment(comments, sumSubcomment);

  res.render("case02", {
    title: "Case 02 |",
    totalComments: MainComments + SubComments + SubSubcomments,
    MainComments,
    SubComments,
    SubSubcomments,
  });
};
