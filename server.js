const Koa = require('koa');
const serveStatic = require('koa-static');
const app = new Koa();

app.use(serveStatic(`${__dirname}/build`));
const port = process.env.PORT || 3000;

app.listen(port);
console.log(`Serving ${__dirname}/build on port ${port}`);