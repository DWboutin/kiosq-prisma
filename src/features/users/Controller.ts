import { NextFunction, Request, Response } from 'express'
import { WithExpressErrorHandling } from '/utils/decorators/WithExpressErrorHandling'
import { ZodValidator } from '/utils/ZodValidator'
import { userCreationSchema } from '/features/users/validationSchema'
import { UserRepository } from '/features/users/Repository'
import { GuardAgainstWrongId } from '/guards/GuardAgainstWrongId'
import { JwtTokenManager } from '/utils/JwtTokenManager'
import { Encrypter } from '/utils/Crypter'
import { UserFactory } from '/features/users/Factory'

export class UserController {
  @WithExpressErrorHandling
  static async create(req: Request, res: Response) {
    const validator = new ZodValidator(userCreationSchema)
    validator.validate(req.body)

    const { name, email, password } = req.body
    const passwordHash = await Encrypter.hash(password)

    const userRepository = new UserRepository()
    const rawUser = await userRepository.create({ name, email, password: passwordHash })
    const user = UserFactory.create(rawUser)

    res.status(201).json({ user })

    return
  }

  @WithExpressErrorHandling
  static async findAll(req: Request, res: Response) {
    const userRepository = new UserRepository()
    const rawUsers = await userRepository.findAll()
    const users = rawUsers.map((rawUser) => UserFactory.create(rawUser))

    res.status(200).json({ users })

    return
  }

  @WithExpressErrorHandling
  static async findById(req: Request, res: Response, next: NextFunction) {
    const id = parseInt(req.params.id)

    GuardAgainstWrongId.guard(id)

    const userRepository = new UserRepository()
    const rawUser = await userRepository.findById(id)

    if (!rawUser) {
      res.status(404).json({ message: 'User not found' })

      return
    }

    const user = UserFactory.create(rawUser)

    res.status(200).json({ user })

    return
  }

  @WithExpressErrorHandling
  static async update(req: Request, res: Response) {
    const authenticatedUser = req.user as User

    const validator = new ZodValidator(userCreationSchema.partial())
    validator.validate(req.body)

    const userRepository = new UserRepository()
    const rawUser = await userRepository.update(authenticatedUser.id, req.body)
    const user = UserFactory.create(rawUser)

    res.status(200).json({ user })

    return
  }

  @WithExpressErrorHandling
  static async delete(req: Request, res: Response) {
    const authenticatedUser = req.user as User

    const userRepository = new UserRepository()
    await userRepository.delete(authenticatedUser.id)

    res.status(204).send()

    return
  }

  @WithExpressErrorHandling
  static async login(req: Request, res: Response) {
    const validator = new ZodValidator(userCreationSchema.partial())
    validator.validate(req.body)

    const { email, password } = req.body

    const userRepository = new UserRepository()
    const user = await userRepository.findByEmail(email)

    if (!user) {
      res.status(404).json({ message: 'User not found' })

      return
    }

    const passwordMatch = await Encrypter.compare(password, user.password)

    if (!passwordMatch) {
      res.status(404).json({ message: 'User not found' })

      return
    }

    const token = await JwtTokenManager.generate({ id: user.id, email: user.email })

    res.status(200).json({ token })

    return
  }
}
