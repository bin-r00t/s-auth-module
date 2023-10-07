import dbClient from "./db";
import "dotenv/config";

dbClient
  .db("s-project")
  .collection("images")
  .findOne()
  .then((res) => {
    console.log("res", res);
  })
  .catch((err) => {
    console.log("err", err);
  });
