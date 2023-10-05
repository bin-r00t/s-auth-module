// router index
import Router from '@koa/router';
import AuthRouters from './auth';
const router = new Router();

router.use('/auth', AuthRouters.routes(), AuthRouters.allowedMethods());

export default router;