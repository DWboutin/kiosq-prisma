import express from 'express'

import { ProductsController } from '/features/products/Controller'
import passport from 'passport'

export const productsRoutes = express.Router()

productsRoutes.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  ProductsController.create,
)
productsRoutes.get('/', ProductsController.findAll)
productsRoutes.get('/profile/:id', ProductsController.findAllForAuhtorId)
productsRoutes.get('/:id', ProductsController.findById)
productsRoutes.put(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  ProductsController.update,
)
productsRoutes.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  ProductsController.delete,
)
