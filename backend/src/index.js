const express = require( 'express' );
const cors = require('cors');
const routes = require( './routes' );

const app = express();

app.use(cors());
app.use(express.json()); // funciona somente quando a requisição for do tipo JSON
app.use(routes);

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros NOMEADOS enviados na rota após "?" (Filtros, paginação)
  * Route Params: Parâmetros (NÃO-NOMEADOS) utilizados para identificar recursos
  * Request Body: Corpo da rquisição, utilizado para criar ou alterar recursos
  */

/**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */

/**
  * Driver: SELECT * FROM users;
  * Query Builder: table('users').select('*').where()
  * KNEX.JS = query builder for Node.js
  */

app.listen(3333);
