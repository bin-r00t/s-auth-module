import Koa from "koa";
import { User } from "../model/index";

export function join() {}

export function leave() {}

export function message() {}

export async function createUser(ctx: Koa.Context, next: Koa.Next) {
  // const { username } = ctx.request.body;
  const username = "asdtesst";
  const user = new User(username);
  try {
    const savedRes = await user.save();
    if (savedRes == null) {
      ctx.body = {
        code: -1,
        data: "user exists",
      };
      return;
    }
    ctx.body = {
      code: 0,
      data: savedRes,
    };
  } catch (error) {
    console.log(error);
  }
  ctx.body = "error";
}
