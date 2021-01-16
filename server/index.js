import path from 'path';
import fastify from 'fastify';
import pointOfView from 'point-of-view';
import fastifyFormbody from 'fastify-formbody';
import fastifyReverseRoutes from 'fastify-reverse-routes';
import qs from 'qs';
import Pug from 'pug';
import i18next from 'i18next';
import { fileURLToPath } from 'url';
import addRoutes from './routes/index.js';
import getHelpers from './helpers/index.js';
import ru from './locales/ru.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const setUpViews = (app) => {
  const helpers = getHelpers(app);
  app.register(pointOfView, {
    engine: {
      pug: Pug,
    },
    includeViewExtension: true,
    defaultContext: {
      ...helpers,
    },
    templates: path.join(__dirname, '..', 'server', 'views'),
  });

  app.decorateReply('render', function render(viewPath, locals) {
    this.view(viewPath, { ...locals, reply: this });
  });
};

const setupLocalization = () => {
  i18next
    .init({
      lng: 'ru',
      fallbackLng: 'en',
      debug: false,
      resources: {
        ru,
      },
    });
};

const registerPlugins = (app) => {
  app.register(fastifyReverseRoutes.plugin);
  app.register(fastifyFormbody, { parser: qs.parse });
};

export default () => {
  const app = fastify({
    logger: {
      prettyPrint: true,
    },
  });

  registerPlugins(app);

  setupLocalization(app);
  setUpViews(app);
  addRoutes(app);

  return app;
};
