const { Router } = require('express')
const { createOneCategory, listAllCategories } = require('../controllers/category.controller')

class CategoryRoutes {
  routesFromCategory () {
    const categoryRoutes = Router();
    categoryRoutes.post('/createOneCategory', createOneCategory);
    categoryRoutes.get('/listAllCategories', listAllCategories)
    return categoryRoutes
  }
}


module.exports = new CategoryRoutes()