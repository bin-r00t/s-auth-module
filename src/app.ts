// app index
import Koa from "koa";
import RootRouter from "./router";

const app = new Koa();

app.use(RootRouter.routes()).use(RootRouter.allowedMethods());

app.listen(9000, () => {
  console.log("[*] Server started at: http://localhost:9000");
});
