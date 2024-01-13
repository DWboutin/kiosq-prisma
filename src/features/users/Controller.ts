import { NextFunction, Request, Response } from 'express'
import { WithExpressErrorHandling } from '/utils/decorators/WithExpressErrorHandling'
import { ZodValidator } from '/utils/ZodValidator'
import { userCreationSchema } from '/features/users/validationSchema'
import { UserRepository } from '/features/users/Repository'

export class UserController {
  @WithExpressErrorHandling
  static async create(req: Request, res: Response, next: NextFunction) {
    const validator = new ZodValidator(userCreationSchema)
    validator.validate(req.body)

    const { name, email, password } = req.body

    const userRepository = new UserRepository()
    const user = await userRepository.create({ name, email, password })

    res.status(201).json({ user })

    return
  }
}
