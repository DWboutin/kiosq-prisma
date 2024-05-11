import express from 'express'
import { ProductSizesPricesController } from '/features/productSizesPrices/Controller'
import passport from 'passport'

export const productSizesPricesRoutes = express.Router()

productSizesPricesRoutes.post(
  '/:productId',
  passport.authenticate('jwt', { session: false }),
  ProductSizesPricesController.create,
)
productSizesPricesRoutes.get('/:productId', ProductSizesPricesController.findAll)
productSizesPricesRoutes.put(
  '/:productId/:sizeId',
  passport.authenticate('jwt', { session: false }),
  ProductSizesPricesController.update,
)
productSizesPricesRoutes.delete(
  '/:productId/:sizeId',
  passport.authenticate('jwt', { session: false }),
  ProductSizesPricesController.delete,
)
