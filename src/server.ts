import strapi from '@strapi/strapi';
(async ()=>{
  const app = await strapi({ distDir: './dist' });
  console.log(app)
  await app.start()
})()

