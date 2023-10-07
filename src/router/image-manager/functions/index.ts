import Koa from "koa";

export async function uploadHandler(ctx: Koa.Context) {
  ctx.body = "uploadHandler";
}

export async function getAll(ctx: Koa.Context) {
  ctx.body = "getAll";
}

export async function getSlice(ctx: Koa.Context) {
  ctx.body = "getSlice";
}

export async function getOne(ctx: Koa.Context) {
  ctx.body = "getOne";
}

export async function deleteOne(ctx: Koa.Context) {
  ctx.body = "deleteOne";
}
