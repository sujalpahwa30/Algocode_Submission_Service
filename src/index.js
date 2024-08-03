const fastify = require('fastify')({ logger: true});  // calling the fastify constructor 
const app = require('./app');
const PORT = 3000;

fastify.register(app);

// fastify.get('/ping', (req, res) => {
//     // controller function 
//     res.send({ data: 'pong'});
// });

fastify.listen({ port: PORT}, (err) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    console.log(`Server is running on port ${PORT}`);
});