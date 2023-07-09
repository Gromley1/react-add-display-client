

const fastify = require('fastify')({
    logger: true
}).register(require('./routes/clients'));

// fastify.register(require('fastify-cors'), {
//     origin: '*',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
// });

const start = async () => {
    try {
        await fastify.listen({ port: 4200 });
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
}

start();    