import express from 'express'

import { ProductsController } from '/features/products/Controller'

export const productsRoutes = express.Router()

productsRoutes.post('/', ProductsController.create)
productsRoutes.get('/', ProductsController.findAll)
productsRoutes.get('/:id', ProductsController.findById)
productsRoutes.put('/', ProductsController.update)
productsRoutes.delete('/', ProductsController.delete)
