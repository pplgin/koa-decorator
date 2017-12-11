import BaseController from './BaseController'
import { Prefix, Route } from '../decorators/common';

@Prefix('/file')
export default class FileContoller extends BaseController {

  @Route('/index')
  Index(ctx, next){
    ctx.body = 'file test'
  }

  @Route('/add', 'POST')
  Add(ctx, next){
    ctx.body = 'file add'
  }
}