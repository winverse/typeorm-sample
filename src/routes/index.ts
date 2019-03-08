import Router from 'koa-router';

import api from './api';

class Routes {
  public routes: Router;
  constructor() {
    this.routes = new Router();
    this.routesConnect();
  }
  public routesConnect = (): void => {
    const { routes } = this;
    routes.use('/api', api.routes());
  }
}

const router = new Routes();

export default router.routes;