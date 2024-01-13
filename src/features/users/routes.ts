import express from 'express'
import { UserController } from '/features/users/Controller'

export const userRoutes = express.Router()

userRoutes.post('/', UserController.create)
