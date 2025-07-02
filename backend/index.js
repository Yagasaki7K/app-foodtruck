const fastify = require('fastify')({ logger: true });

fastify.get('/', async (request, reply) => {
  return { hello: 'Anderson' };
});

fastify.get('/orders', async (request, reply) => {
  // Simulate fetching orders from a database
  const orders = [
    { id: 1, item: 'Taco', quantity: 2, price: 10.00 },
    { id: 2, item: 'Burrito', quantity: 1, price: 8.50 },
    { id: 3, item: 'Nachos', quantity: 3, price: 12.00 }
  ];
  return { orders };
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log('Server is running at http://localhost:3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();