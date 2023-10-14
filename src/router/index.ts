// router index
import Router from "@koa/router";
import * as ChatController from "./chat";
import { logger } from "../utils/logger";
const router = new Router();

router.post("/chat/create-user", logger, ChatController.createUser);
// router.use("/chat/leave", logger, ChatController.join);
// router.use("/chat/join", logger, ChatController.join);
// router.use("/chat/join", logger, ChatController.join);

export default router;
