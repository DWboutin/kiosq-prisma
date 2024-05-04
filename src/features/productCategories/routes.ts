import express from 'express'

import { ProductCategoriesController } from '/features/productCategories/Controller'

export const productCategoriesRoutes = express.Router()

productCategoriesRoutes.post('/', ProductCategoriesController.create)
productCategoriesRoutes.get('/', ProductCategoriesController.findAll)
productCategoriesRoutes.get('/:id', ProductCategoriesController.findById)
productCategoriesRoutes.put('/', ProductCategoriesController.update)
productCategoriesRoutes.delete('/', ProductCategoriesController.delete)
