import Router from "@koa/router";
import Koa from "koa";
import { uploadHandler, getAll, getSlice, getOne, deleteOne } from "./functions";
const router = new Router();

// 上传一个图片
router.post("/upload", uploadHandler);

// 获得所有图片
router.get("/all", getAll);

// 分页获得所有图片
router.get("/slice", getSlice);

// 获得具体某个图片
router.get("/:id", getOne);

// 删除具体图片
router.delete("/:id", deleteOne);

export default router;
