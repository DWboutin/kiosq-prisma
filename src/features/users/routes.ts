import express from 'express'
import { UserController } from './Controller'

export const userRoutes = express.Router()

userRoutes.post('/', UserController.create)
userRoutes.get('/', UserController.findAll)
userRoutes.get('/:id', UserController.findById)
userRoutes.put('/:id', UserController.update)
userRoutes.delete('/:id', UserController.delete)
userRoutes.post('/login', UserController.login)
