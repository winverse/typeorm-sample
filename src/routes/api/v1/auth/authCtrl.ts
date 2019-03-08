import { Context } from "koa";

export default class AuthCtrl {
  static sendEmail = (ctx: Context) => {
    console.log('안녕');
    ctx.body = '헬로';
  }
}