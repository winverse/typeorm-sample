import Router from 'koa-router';

import authCtrl from './authCtrl';

class Auth {
  public auth: Router;
  constructor() {
    this.auth = new Router();
    this.routes();
  }
  public routes = (): void => {
    const { auth } = this;
    auth.post('/send-email-auth', authCtrl.sendEmail);
  }
}

const router: Auth = new Auth();

export default router.auth;

