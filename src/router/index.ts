// router index
import Router from '@koa/router';
import AuthRouters from './image-manager';
const router = new Router();

router.use('/img', AuthRouters.routes(), AuthRouters.allowedMethods());

export default router;