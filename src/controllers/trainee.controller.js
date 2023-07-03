const { Trainee } = require('../models/trainee')

class TraineeController {
  async createOneTrainee(request, response) {
    const { name, email, rg, cpf, primaryPhoneContact, secondaryPhoneContact,
      dateBirth, fatherName, motherName, haveSpecialNeeds } = request.body
    const data = await Trainee.create({
      name, email, rg, cpf, primaryPhoneContact, secondaryPhoneContact,
      dateBirth, fatherName, motherName, haveSpecialNeeds
    })
    return response.status(201).send(data)
  }
}


module.exports = new TraineeController()