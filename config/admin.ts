export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '945dce0a1575a2696c0dcf81d6ff56d4'),
  },
});
