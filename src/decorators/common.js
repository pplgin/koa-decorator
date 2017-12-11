import Router from 'koa-router'

/**
 * 配置路由
 * @param {*} path 路由地址
 * @param {*} method  POST GET
 * @param {*} middleware  中间件
 */
export const Route = (path, method, ...middleware) => {
  return (target, key, descriptor) => {
    method = method ? method.toLocaleLowerCase() : 'get'
    target.router = target.router || new Router()
    target.router[method](path, ...middleware, descriptor.value);
    return target
  }
}

/**
 * base路由
 * @param { String } prefixPath
 */
export const Prefix = (prefixPath = '/') =>  {
  return target => {
    target.prototype.router = target.prototype.router || new Router()
    target.prototype.router.prefix(prefixPath)
    return target
  }
}