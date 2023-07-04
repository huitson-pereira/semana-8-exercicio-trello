const { createOneTrainee, listAllTrainee, listOneTrainee } = require('../controllers/trainee.controller');
const { Router } = require('express')

class CompanieRouter {
  routesFromTrainee () {
    const traineeRoutes = Router()
    traineeRoutes.post('/createOneCompanie', createOneTrainee)
    traineeRoutes.get('/listAllCompanie', listAllTrainee)
    traineeRoutes.get('/listOneCompanie/:id', listOneTrainee)
    
    return traineeRoutes
  }
}


module.exports = new TraineeRouter()