module.exports = ({ env }) => ({
  host: env('HOST'),
  port: env.int('PORT', 433),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});