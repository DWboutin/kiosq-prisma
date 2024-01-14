import express from 'express'
import { UserController } from './Controller'
import passport from 'passport'

export const userRoutes = express.Router()

userRoutes.post('/', UserController.create)
userRoutes.get('/', UserController.findAll)
userRoutes.get('/:id', UserController.findById)
userRoutes.put('/', passport.authenticate('jwt', { session: false }), UserController.update)
userRoutes.delete('/', passport.authenticate('jwt', { session: false }), UserController.delete)
userRoutes.post('/login', UserController.login)
