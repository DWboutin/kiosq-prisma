import express from 'express'
import { userRoutes } from '/features/users/routes'
import { productsRoutes } from '/features/products/routes'
import { productCategoriesRoutes } from '/features/productCategories/routes'
import { productTypesRoutes } from '/features/productTypes/routes'
import { productVarietiesRoutes } from '/features/productVarieties/routes'
import { productSizesRoutes } from '/features/productSizes/routes'
import { productSizesPricesRoutes } from '/features/productSizesPrices/routes'

const routes = express.Router()

routes.use('/users', userRoutes)
routes.use('/products', productsRoutes)
routes.use('/product-categories', productCategoriesRoutes)
routes.use('/product-types', productTypesRoutes)
routes.use('/product-varieties', productVarietiesRoutes)
routes.use('/product-sizes', productSizesRoutes)
routes.use('/product-sizes-prices', productSizesPricesRoutes)

export const router = routes
