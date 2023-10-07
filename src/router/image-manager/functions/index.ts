import Koa from "koa";
import dbClient from "../../../db";
import { Collection } from "mongodb";

let collection: Collection;
async function init() {
  console.log("[*] db initing......");
  const db = dbClient.db("s-project");
  collection = db.collection("images");
}

init();

export async function uploadHandler(ctx: Koa.Context) {
  if (!collection) await init();

  ctx.body = "uploadHandler";
}

export async function getAll(ctx: Koa.Context) {
  if (!collection) await init();
  const result = await collection.find({}).toArray();
  ctx.body = {
    code: 0,
    data: result,
  };
}

export async function getSlice(ctx: Koa.Context) {
  if (!collection) await init();

  ctx.body = "getSlice";
}

export async function getOne(ctx: Koa.Context) {
  if (!collection) await init();

  ctx.body = "getOne";
}

export async function deleteOne(ctx: Koa.Context) {
  if (!collection) await init();

  ctx.body = "deleteOne";
}
