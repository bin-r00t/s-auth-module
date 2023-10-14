import "dotenv/config";
import Koa from "koa";
import RootRouter from "./router";
import "./websocket";

const app = new Koa();

app.use(RootRouter.routes()).use(RootRouter.allowedMethods());

app.listen(9000, () => {
  console.log("[*] Server started at: http://localhost:9000");
});

// TODO
// 1. 上传后，生成url, 保存 { url, path, thumb: binary } 至数据库
// 2. 当用户需要访问 url 时, 验证访问权限后, 先返回 thumb
// 3. 当用户点击查看原图时，才返回高清原图
// 4. 针对一些需要立即展示高清图的页面，前端使用 promise.all() 并发请求，先返回 thumb 占位  ，再返回原图
