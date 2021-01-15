import fastify from 'fastify';

const mode = process.env.NODE_ENV || 'development';
// const isProduction = mode === 'production';
const isDevelopment = mode === 'development';

export default () => {
  const app = fastify({
    logger: {
      prettyPrint: isDevelopment,
    },
  });

  return app;
};
