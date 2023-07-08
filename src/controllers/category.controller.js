const { Category } = require('../models/category')

class CategoryController {
    async createOneCategory(request, response) {

        try {
            const { name } = request.body
            if(!name) {
            return response.status(400).send({message: "O nome é um campo obrigatório"})
        }
  
        const data = await Category.create({
          name
        })
    
        return response.status(201).send(data)
        } catch (error) {
            console.log(error.message)
            return response.status(400).send({message: "A categoria não pôde ser criada!"})
        }
    }
    
    async listAllCategories (request, response) {
        const {offset, limit} = request.params
    
        const data = await listCategoriesService(offset, limit)
    
        const total = await Category.count()
    
        return response.status(200).send({records: data, total})
    }

    async updateOneCategory(request, response) {
        const { id } = request.params
        const { name } = request.body
        await Category.update({ name }, { where: { id } })
        return response.status(204).send()
      }
      async deleteOneCategory(request, response) {
        const { id } = request.params
        await Category.destroy({where: { id }})
        return response.status(204).send()
      }
}


module.exports = new CategoryController()