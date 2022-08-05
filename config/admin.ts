export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a356601a01f395753ef34add8a10c8b4'),
  },
});
