import Router from 'koa-router';

import auth from './auth';

class V1 {
  public v1: Router;
  constructor() {
    this.v1 = new Router();
    this.routes();
  }
  public routes = (): void => {
    const { v1 } = this;
    v1.use('/auth', auth.routes());
  }
}

const router: V1 = new V1;

export default router.v1;