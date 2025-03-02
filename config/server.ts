import { env } from '@strapi/utils';
import cronTasks from './cron-tasks';

export default () => ({
  host: env('SERVER_HOST', '127.0.0.1'),
  port: env.int('SERVER_PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  url: env('SERVER_HOSTNAME', 'http://localhost:1337'),
  cron: {
    enabled: true,
    tasks: cronTasks,
  },
});
