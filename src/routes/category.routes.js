const { Router } = require('express')
const { createOneCategory, listAllCategory, updateOneCategory, deleteOneCategory, listOneCategory } = require('../controllers/category.controller')

class CategoryRoutes {
  routesFromCategory () {
    const categoryRoutes = Router();
    categoryRoutes.post('/createOneCategory', createOneCategory);
    categoryRoutes.get('/listAllCategory', listAllCategory);
    categoryRoutes.get('/listOneCategory/:id', listOneCategory)
    categoryRoutes.patch('/updateOneCategory/:id', updateOneCategory);
    categoryRoutes.delete('/deleteOneCategory/:id', deleteOneCategory);
    
    return categoryRoutes
  }
}


module.exports = new CategoryRoutes()