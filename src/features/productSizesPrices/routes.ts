import express from 'express'
import { ProductSizesPricesController } from '/features/productSizesPrices/Controller'

export const productSizesPricesRoutes = express.Router()

productSizesPricesRoutes.post('/:productId', ProductSizesPricesController.create)
productSizesPricesRoutes.get('/:productId', ProductSizesPricesController.findAll)
productSizesPricesRoutes.put('/:productId/:sizeId', ProductSizesPricesController.update)
productSizesPricesRoutes.delete('/:productId/:sizeId', ProductSizesPricesController.delete)
