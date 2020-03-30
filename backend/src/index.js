const express = require('express');
const cors = require('cors'); 
const routes = require('./routes.js');

const app = express()

app.use(cors());
app.use(json());
app.use(routes);

app.listen(3333);

//const knex = require('knex');
//const configuration = require('../../knexfile');

//const express = require('express');
//const cors = require('cors'); 
//const routes = require('./routes.js');