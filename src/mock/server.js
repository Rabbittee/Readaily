import { Server, Model } from 'miragejs';

export function makeServer({ environment = 'development' } = {}) {
  let server = new Server({
    environment,

    models: {
      word: Model,
    },

    seeds(server) {
      server.create('word', { id: 1, title: 'Meat', note: '肉肉' });
    },

    routes() {
      this.namespace = 'api';

      this.get('/words', (schema) => {
        return schema.words.all();
      });

      this.post('/words', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);

        return schema.words.create(attrs);
      });
    },
  });

  return server;
}
