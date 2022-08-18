/**
 * project router.
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::project.project', {
  prefix: '',
  only: ['find', 'findOne'],
  except: [],
  config: {
    find: {
      auth: false,
      policies: ['api::project.test-policy'],
      middlewares: [],
    },
    findOne: {},
    create: {},
    update: {},
    delete: {},
  },
});
