import Koa from 'koa';

export async function logger(ctx: Koa.Context, next: Koa.Next) {
  console.log(`[${new Date().toLocaleString()}] ${ctx.method} ${ctx.url}`);
  await next();
}