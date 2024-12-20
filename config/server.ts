import { env } from '@strapi/utils';
import cronTasks from './cron-tasks';

export default () => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 3000),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  url: env('HOSTNAME', 'http://localhost:3000'),
  cron: {
    enabled: true,
    tasks: cronTasks,
  },
});
