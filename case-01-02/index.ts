import type { Request, Response } from "express";
import express from "express";
import { engine } from "express-handlebars";
import { case01 } from "./utils/case01";
import { case02 } from "./utils/case02";

const main = async () => {
  const app = express();

  app.use(express.static("./public"));
  app.use(express.urlencoded({ extended: true }));

  /** config template engine */
  app.engine("handlebars", engine({ defaultLayout: "" }));
  app.set("view engine", "handlebars");
  app.set("views", "./views");

  /** root / main route */
  app.get("/", (_req: Request, res: Response) => {
    return res.render("index");
  });

  app.get("/case01", case01);
  app.get("/case02", case02);

  /** start server */
  app.listen(4000, () => {
    console.log("server running on http://localhost:4000");
  });
};

main().catch((err) => {
  throw err;
});
