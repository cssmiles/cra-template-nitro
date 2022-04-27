/* eslint-disable import/no-extraneous-dependencies */
// src/mocks/handlers.js
import { rest } from 'msw';

const db = { todos: [] };
// eslint-disable-next-line import/prefer-default-export
export const handlers = [
  // Handles a POST /login request
  rest.post('/addtodo', (req, res, ctx) => {
    db.todos.push(req);
    console.log('req, res ', req, '   ', db);
    return res(
      // Respond with a 200 status code
      ctx.json(db),
      ctx.status(200)
    );
  }),
  // Handles a GET /user request
  rest.get('/user', null)
];
