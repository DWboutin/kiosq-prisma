import express from 'express'
import { ProductSizesPricesController } from '/features/productSizesPrices/Controller'

export const productSizesPricesRoutes = express.Router()

productSizesPricesRoutes.post('/', ProductSizesPricesController.create)
productSizesPricesRoutes.get('/', ProductSizesPricesController.findAll)
productSizesPricesRoutes.put('/', ProductSizesPricesController.update)
productSizesPricesRoutes.delete('/', ProductSizesPricesController.delete)
