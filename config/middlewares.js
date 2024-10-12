module.exports = ({ env }) => [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          'script-src': ["'self'", "'unsafe-inline'"],
          'img-src': ["'self'", 'data:', 'blob:', 'strapi.io', `${env('AWS_BUCKET_NAME')}.s3.${env('AWS_REGION')}.amazonaws.com`],
          'media-src': ["'self'", 'data:', 'blob:', 'strapi.io', `${env('AWS_BUCKET_NAME')}.s3.${env('AWS_REGION')}.amazonaws.com`],
        },
      }
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::favicon',
  'strapi::public',
];