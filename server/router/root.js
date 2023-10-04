const express = require('express');
const { todosRouter } = require('./todos');

const rootRouter = express.Router();

rootRouter.use('/todos', todosRouter);

module.exports.rootRouter = rootRouter;
