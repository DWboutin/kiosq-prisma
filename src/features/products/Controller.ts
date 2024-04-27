import { Request, Response } from 'express'
import { WithExpressErrorHandling } from '/utils/decorators/WithExpressErrorHandling'
import { ZodValidator } from '/utils/ZodValidator'
import { productCreationSchema } from '/features/products/validationSchema'
import { ProductsRepository } from '/features/products/Repository'

export class ProductsController {
  @WithExpressErrorHandling
  static async create(req: Request, res: Response) {
    const validator = new ZodValidator(productCreationSchema)
    validator.validate(req.body)

    const { name, categoryId, typeId, varietyId, startPeriod, startMonth, endPeriod, endMonth } =
      req.body
    const productsRepository = new ProductsRepository()
    const product = await productsRepository.create({
      name,
      categoryId,
      typeId,
      varietyId,
      startPeriod,
      startMonth,
      endPeriod,
      endMonth,
    })

    res.status(201).json({ product })

    return
  }

  @WithExpressErrorHandling
  static async findAll(req: Request, res: Response) {
    res.status(401).json({ message: 'Not implemented' })

    return
  }

  @WithExpressErrorHandling
  static async findById(req: Request, res: Response) {
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
