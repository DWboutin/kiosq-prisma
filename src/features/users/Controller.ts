import { NextFunction, Request, Response } from 'express'
import { WithExpressErrorHandling } from '/utils/decorators/WithExpressErrorHandling'
import { ZodValidator } from '/utils/ZodValidator'
import { userCreationSchema } from '/features/users/validationSchema'
import { UserRepository } from '/features/users/Repository'
import { GuardAgainstWrongId } from '/guards/GuardAgainstWrongId'
import { JwtTokenManager } from '/utils/JwtTokenManager'

export class UserController {
  @WithExpressErrorHandling
  static async create(req: Request, res: Response) {
    const validator = new ZodValidator(userCreationSchema)
    validator.validate(req.body)

    const { name, email, password } = req.body

    const userRepository = new UserRepository()
    const user = await userRepository.create({ name, email, password })

    res.status(201).json({ user })

    return
  }

  @WithExpressErrorHandling
  static async findAll(req: Request, res: Response) {
    const userRepository = new UserRepository()
    const users = await userRepository.findAll()

    res.status(200).json({ users })

    return
  }

  @WithExpressErrorHandling
  static async findById(req: Request, res: Response, next: NextFunction) {
    const id = parseInt(req.params.id)

    GuardAgainstWrongId.guard(id)

    const userRepository = new UserRepository()
    const user = await userRepository.findById(id)

    res.status(200).json({ user })

    return
  }

  @WithExpressErrorHandling
  static async update(req: Request, res: Response) {
    const id = parseInt(req.params.id)

    GuardAgainstWrongId.guard(id)

    const validator = new ZodValidator(userCreationSchema.partial())
    validator.validate(req.body)

    const userRepository = new UserRepository()
    const user = await userRepository.update(id, req.body)

    res.status(200).json({ user })

    return
  }

  @WithExpressErrorHandling
  static async delete(req: Request, res: Response) {
    const id = parseInt(req.params.id)

    GuardAgainstWrongId.guard(id)

    const userRepository = new UserRepository()
    await userRepository.delete(id)

    res.status(204).send()

    return
  }

  @WithExpressErrorHandling
  static async login(req: Request, res: Response) {
    const validator = new ZodValidator(userCreationSchema.partial())
    validator.validate(req.body)

    const { email, password } = req.body

    const userRepository = new UserRepository()
    const user = await userRepository.findByCredentials(email, password)

    if (!user) {
      res.status(404).json({ message: 'User not found' })

      return
    }

    const token = await JwtTokenManager.generate({ username: user.email, password: user.password })

    res.status(200).json({ token })

    return
  }
}
