var compression = require('compression');
const express = require('express');

const app = express();
app.use(compression());
app.use(express.static(`${__dirname}/build`));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Serving ${__dirname}/build on port ${port}`))