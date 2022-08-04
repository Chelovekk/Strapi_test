/**
 *  test controller
 */
import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::test.test', ({strapi}) => ({
  async find(ctx){
    strapi.service('apu::test.test');
    return await super.find(ctx);
    },
}));
