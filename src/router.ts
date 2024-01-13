import express from 'express'
import { userRoutes } from './features/users/routes'

const routes = express.Router()

routes.use('/users', userRoutes)

export const router = routes
