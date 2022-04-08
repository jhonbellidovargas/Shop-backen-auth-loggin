const express = require('express');

const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const usuariosRouter = require('./usuarios.router');
const orderRouter = require('./orders.router');
const trabajadoresRouter = require('./trabajadores.router');
const authRouter = require('./auth.router');
const profileRouter = require('./profile.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usuariosRouter);
  router.use('/orders', orderRouter);
  router.use('/workers', trabajadoresRouter);
  router.use('/auth', authRouter);
  router.use('/profile', profileRouter);
}

module.exports = routerApi;
