const fastify = require('fastify')({
    logger: true
  }).register(require('./routes/clients'));

const start = async () => {
    try {
        await fastify.listen({ port: 4200 });
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
}

start();