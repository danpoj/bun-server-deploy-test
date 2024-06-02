import { Hono } from 'hono';

const fakeExpenses = [
  { id: 1, title: 'groceries', amount: 50 },
  { id: 2, title: 'utilities', amount: 100 },
  { id: 3, title: 'rent', amount: 1000 },
];

export const expensesRoute = new Hono()
  .get('/', (c) => {
    return c.json({ expenses: fakeExpenses });
  })
  .post('/', async (c) => {
    const expense = await c.req.json();
    fakeExpenses.push(expense);
    return c.json({ expenses: fakeExpenses });
  });
