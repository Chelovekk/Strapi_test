export default (policyContext, config, {strapi}) => {
  // console.log(config, strapi);
  if(policyContext.state.user){
    return true;
  }
  return true;
}
