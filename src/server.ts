import strapi from '@strapi/strapi';
(async ()=>{
  // const context = strapi.compile()
  const app = await strapi({ distDir: './dist' });
  await app.start()
})()

