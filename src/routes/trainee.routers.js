const { createOneTrainee, listAllTrainee, listOneTrainee, atualizaOneTrainee } = require('../controllers/trainee.controller');
const { Router } = require('express')

class TraineeRouter {
  routesFromTrainee () {
    const traineeRoutes = Router()
    traineeRoutes.post('/createOneTrainee', createOneTrainee)
    traineeRoutes.get('/listAllTrainee', listAllTrainee)
    traineeRoutes.get('/listOneTrainee/:id', listOneTrainee)
    traineeRoutes.put('/atualizaOneTrainee/:id', atualizaOneTrainee)
     return traineeRoutes
  }
}


module.exports = new TraineeRouter()