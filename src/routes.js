const { Router } = require('express');

const userController = require('./controllers/userController');

const routes = Router();

routes.get('/users', userController.show);
routes.get('/users/:id', userController.index);
routes.post('/users', userController.store);
routes.put('/users/:id', userController.update);
routes.delete('/users/:id', userController.destroy);

module.exports = routes;