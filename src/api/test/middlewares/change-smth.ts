export default (ctx, next) => {
  console.log(ctx);
  console.log(typeof ctx, typeof next)
  // return next();
}
