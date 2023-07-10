const { createOneCompanie, listAllCompanie, listOneCompanie } = require('../controllers/companies.controller');
const { Router } = require('express')

class CompanieRouter {
  routesFromCompanie () {
    const companieRoutes = Router()
    companieRoutes.post('/createOneCompanie', createOneCompanie)
    companieRoutes.get('/listAllCompanie', listAllCompanie)
    companieRoutes.get('/listOneCompanie/:id', listOneCompanie)
    
    return companieRoutes
  }
}


module.exports = new CompanieRouter()