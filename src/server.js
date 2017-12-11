const Koa = require('koa');
const session = require('koa-generic-session');
const redisStore = require('koa-redis');
const bodyParser = require('koa-bodyparser')
const serve = require('koa-static')
const views = require('koa-views');
const path  = require('path')
const app = new Koa();

// 生成helper
const { helper } = require('./middlewares/helper')

import RegisterRouter from './common/RouterRegister'


import Home from './controllers/HomeController'
import File from './controllers/FileController'

// middleware
app.use(session())
app.use(bodyParser())

// koa-views
app.use(views(__dirname + '/views', {
  map: {
    html: 'swig',
    swig: 'swig'
  }
}));

// session
app.use(async (ctx,next)=>{
  ctx.state.session = ctx.session ? ctx.session : null;
  await next();
})

// Register Controllers
const home = new Home();
const file = new File();

// Register router
const router = RegisterRouter([home, file])
app.use(router)
app.use(helper())

// static source dir
app.use(serve(path.resolve('./static')))


app.listen(1111, () => {
  console.log(`server is running at http://0.0.0.0:1111`)
})
