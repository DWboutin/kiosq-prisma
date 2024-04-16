import express from 'express'

import { ProductSizesController } from '/features/productSizes/Controller'

export const productSizesRoutes = express.Router()

productSizesRoutes.post('/', ProductSizesController.create)
productSizesRoutes.get('/', ProductSizesController.findAll)
productSizesRoutes.get('/:id', ProductSizesController.findById)
productSizesRoutes.put('/', ProductSizesController.update)
productSizesRoutes.delete('/', ProductSizesController.delete)
