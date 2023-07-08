const { Router } = require('express')
const { createOneCategory, listAllCategories, updateOneCategory, deleteOneCategory } = require('../controllers/category.controller')

class CategoryRoutes {
  routesFromCategory () {
    const categoryRoutes = Router();
    categoryRoutes.post('/createOneCategory', createOneCategory);
    categoryRoutes.get('/listAllCategories', listAllCategories);
    categoryRoutes.patch('/updateOneCategory/:id', updateOneCategory);
    categoryRoutes.delete('/deleteOneCategory/:id', deleteOneCategory);
    
    return categoryRoutes
  }
}


module.exports = new CategoryRoutes()