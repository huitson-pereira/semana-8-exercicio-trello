const { Router } = require('express')
const { routesFromTrainee } = require('./trainee.routers')
const { routesFromCategory } = require('./category.routes')
const { routesFromContract } = require('./contract.routes')
const { routesFromCompanie} = require('./companie.routes')
const {routesFromUser } = require('./user.routers')
const routes = new Router()

routes.use('/api', [routesFromCategory(), routesFromTrainee(), routesFromCompanie(), routesFromContract(), routesFromUser()])

module.exports = routes
