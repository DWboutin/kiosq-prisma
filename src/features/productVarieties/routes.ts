import express from 'express'

import { ProductVarietiesController } from '/features/productVarieties/Controller'

export const productVarietiesRoutes = express.Router()

productVarietiesRoutes.post('/', ProductVarietiesController.create)
productVarietiesRoutes.get('/', ProductVarietiesController.findAll)
productVarietiesRoutes.get('/:id', ProductVarietiesController.findById)
productVarietiesRoutes.put('/', ProductVarietiesController.update)
productVarietiesRoutes.delete('/', ProductVarietiesController.delete)
productVarietiesRoutes.get('/type/:id', ProductVarietiesController.findByTypeId)
