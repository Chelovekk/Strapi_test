/**
 *  project controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::project.project', ({strapi}) => ({
  async find(ctx){
    console.log(this.findOne)
    console.log(this.this)
    console.log(typeof this)
    return await super.find(ctx);
  }
}));
