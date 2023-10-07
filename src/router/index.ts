// router index
import Router from "@koa/router";
import AuthRouters from "./image-manager";
import { logger } from "../utils/logger";
const router = new Router();

router.use("/img", logger, AuthRouters.routes(), AuthRouters.allowedMethods());

export default router;
