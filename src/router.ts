import express from 'express'
import { userRoutes } from './features/users/routes'
import { productVarietiesRoutes } from './features/productVarieties/routes'
import { productTypesRoutes } from './features/productTypes/routes'
import { productCategoriesRoutes } from '/features/productCategories/routes'

const routes = express.Router()

routes.use('/users', userRoutes)
routes.use('/product-categories', productCategoriesRoutes)
routes.use('/product-types', productTypesRoutes)
routes.use('/product-varieties', productVarietiesRoutes)

export const router = routes
