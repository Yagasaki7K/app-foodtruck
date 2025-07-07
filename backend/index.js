const fastify = require('fastify')({ logger: true });
const uuid = require('uuid');

fastify.get('/', async (request, reply) => {
  return { hello: 'Anderson' };
});

fastify.get('/orders', async (request, reply) => {
  const orders = [
    {
      id: uuid.v4(),
      createdAt: new Date().toISOString(),
      clientName: 'John Doe',
      items: [
        { name: 'Item 1', price: 10, quantity: 2 },
        { name: 'Item 2', price: 20, quantity: 1 },
      ],
      totalPrice: 30,
      status: 'pending',
      paymentMethod: 'cash',
    },
  ];
  return { orders };
});

fastify.post('/orders', async (request, reply) => {
  const order = request.body;
  order.id = uuid.v4();
  order.createdAt = new Date().toISOString();
  order.clientName = request.headers['client-name'] || 'Unknown';
  order.clientAddress = request.headers['client-address'] || 'Unknown';
  order.items = order.items || [];
  order.totalPrice = order.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  order.status = 'pending';
  order.paymentMethod = request.headers['payment-method'] || 'cash';
  return { message: 'Order created successfully', order };
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