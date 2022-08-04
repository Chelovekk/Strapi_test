/**
 * test router.
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::test.test', {
  only: ['find', 'findOne'],
  config: {
    find: {
      auth: false,
      middlewares: ['api::test.change-smth'],
      policies: ['is-user'],
    }
  }
});
