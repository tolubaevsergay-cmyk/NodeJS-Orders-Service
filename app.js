const Fastify = require('fastify');
const db = require('./db/index');
const { registerRoutes } = require('./routes');
const app = Fastify({
  logger: true
});
const PORT = 3000
require('./routes').registerRoutes(app, db)

const start = async () => {
  try{
    await app.listen({port: PORT})
    app.log.info('Server running...')
  }catch(err){
    app.log.error(err)
    process.exit(1)
  }
}
start()

