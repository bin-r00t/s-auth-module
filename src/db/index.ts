import { MongoClient } from "mongodb";

let url = "mongodb://";
if (process.env.DB_USER && process.env.DB_PASSWORD) {
  url += `${process.env.DB_USER}:${process.env.DB_PASSWORD}@`;
}
url += `${process.env.DB_HOST}:${process.env.DB_PORT}`;
console.log("[*] mongod url", url);
const client = new MongoClient(url);

export default client;
