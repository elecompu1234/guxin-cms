module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET','d46vfSOU8IxsiAE54O4QNA=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT','d46vfSOU8IxsiAE54O4QNAxx'),
  },
});
