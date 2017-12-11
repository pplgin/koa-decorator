const compose = require('koa-compose')

export default (routes) => {
  if (!Array.isArray(routes)) {
    return Error('routes must be Array!');
  }

  let routerMiddlwares = routes.reduce((arr, route) => {
    return arr.concat(route.routes(), route.allowedMethods())
  }, [])

  return compose(routerMiddlwares);
}