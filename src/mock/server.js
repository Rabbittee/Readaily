import { Server, Model } from 'miragejs';
import { articles } from './data';

export function makeServer({ environment = 'development' } = {}) {
  let server = new Server({
    environment,

    models: {
      word: Model,
    },

    routes() {
      this.namespace = 'api';

      this.get('/articles', () => ({
        articles: articles,
      }));

      this.get('/word', (schema) => {
        return schema.words.all();
      });

      this.post('/word/create', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);

        return schema.words.create(attrs);
      });
    },
  });

  return server;
}
