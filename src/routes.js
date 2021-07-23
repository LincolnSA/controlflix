const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController')
const PdfController = require('./controllers/PdfController')

routes.get('/', UserController.index)

routes.get('/usuarios', (req, res) => res.render('user/index'))
routes.post('/usuarios', UserController.store)

routes.get('/usuarios/:id/editar', UserController.show)
routes.post('/usuarios/:id/editar', UserController.update)

routes.get('/usuarios/:id/deletar', UserController.showDelete)
routes.post('/usuarios/:id/deletar', UserController.delete)

routes.get('/usuarios/:id/pdf', PdfController.download)
routes.get('/usuarios/:id/model-pdf', PdfController.show)

module.exports = routes;