import BaseController from './BaseController'
import { Prefix, Route } from '../decorators/common'


@Prefix('/home')
export default class HomeController extends BaseController{

  @Route('/index')
  Index(ctx, next) {
    ctx.body = '111'
  }
}