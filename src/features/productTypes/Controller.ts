import { NextFunction, Request, Response } from 'express'
import { WithExpressErrorHandling } from '/utils/decorators/WithExpressErrorHandling'
import { ProductTypesRepository } from '/features/productTypes/Repository'
import { ZodValidator } from '/utils/ZodValidator'
import { idParams } from '/utils/validationSchemas/idParam'

export class ProductTypesController {
  @WithExpressErrorHandling
  static async create(req: Request, res: Response) {
    res.status(401).json({ message: 'Not implemented' })

    return
  }

  @WithExpressErrorHandling
  static async findAll(req: Request, res: Response) {
    const productTypesRepository = new ProductTypesRepository()
    const rawProductTypes = await productTypesRepository.findAll()

    res.status(200).json({ productTypes: rawProductTypes })

    return
  }

  @WithExpressErrorHandling
  static async findByCategoryId(req: Request, res: Response, next: NextFunction) {
    const validator = new ZodValidator(idParams)
    validator.validate(req.params)

    const productTypesRepository = new ProductTypesRepository()
    const rawProductTypes = await productTypesRepository.findByCategoryId(parseInt(req.params.id))

    res.status(200).json({ productTypes: rawProductTypes })

    return
  }

  @WithExpressErrorHandling
  static async findById(req: Request, res: Response, next: NextFunction) {
    res.status(401).json({ message: 'Not implemented' })

    return
  }

  @WithExpressErrorHandling
  static async update(req: Request, res: Response) {
    res.status(401).json({ message: 'Not implemented' })

    return
  }

  @WithExpressErrorHandling
  static async delete(req: Request, res: Response) {
    res.status(401).json({ message: 'Not implemented' })

    return
  }
}
