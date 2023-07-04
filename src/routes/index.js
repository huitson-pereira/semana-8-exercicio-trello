const { Router } = require('express')
const { routesFromTrainee } = require('./trainee.routers')
const { routesFromCategory } = require('./category.routes')
const routes = new Router()

routes.use('/api', [routesFromCategory(), routesFromTrainee()])

module.exports = routes
