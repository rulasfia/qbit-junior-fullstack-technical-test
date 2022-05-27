import * as readline from "readline";
import { case01 } from "./case01";
import { case02 } from "./case02";

/** setup readline CLI interface */
const cli = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/** function for invalid case input */
const invalidCase = () => console.log("option not available");

/** main function */
const main = () => {
  console.log("1. case 1");
  console.log("2. case 2");

  /** create prompt */
  cli.question("what do you want to run? (1/2) ", (res) => {
    if (res === "1") case01();
    else if (res === "2") case02();
    else invalidCase();

    /** close readline */
    cli.close();
    return;
  });
};

main();
