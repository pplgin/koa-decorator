/**
 * 生成helper的页面
 */
export const helper = (routes) => {
  return (ctx, next) => {
    if (/^\/help/.test(ctx.path)) {
      return ctx.render('helper')
    }
    next();
  }
}