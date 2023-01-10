import { rest } from 'msw';

export const handlers = [
  //handlers a post request
  rest.get('api/word', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          title: 'vocabulary',
          describe: '字彙',
        },
      ])
    );
  }),
];
