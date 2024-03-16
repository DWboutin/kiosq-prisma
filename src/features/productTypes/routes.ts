import express from 'express'
import { ProductTypesController } from '/features/productTypes/Controller'

export const productTypesRoutes = express.Router()

productTypesRoutes.post('/', ProductTypesController.create)
productTypesRoutes.get('/', ProductTypesController.findAll)
productTypesRoutes.get('/:id', ProductTypesController.findById)
productTypesRoutes.put('/', ProductTypesController.update)
productTypesRoutes.delete('/', ProductTypesController.delete)
