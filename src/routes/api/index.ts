import Router from 'koa-router';

import v1 from './v1';

class Api {
  public api: Router;
  constructor() {
    this.api = new Router();
    this.routes();
  }
  public routes = (): void => {
    const { api } = this;
    api.use('/v1', v1.routes());
  }
}

const router = new Api();

export default router.api;