import Router from '@koa/router';
import Koa from 'koa';


const router = new Router();

router.post('/login', async (ctx: Koa.Context) => {
  ctx.body = 'login'
})

export default router;