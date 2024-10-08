import { NextFunction, Request, Response } from 'express'
import { WithExpressErrorHandling } from '/utils/decorators/WithExpressErrorHandling'
import { ProductVarietiesRepository } from '/features/productVarieties/Repository'
import { ZodValidator } from '/utils/ZodValidator'
import { idParams } from '/utils/validationSchemas/idParam'

export class ProductVarietiesController {
  @WithExpressErrorHandling
  static async create(req: Request, res: Response) {
    res.status(401).json({ message: 'Not implemented' })

    return
  }

  @WithExpressErrorHandling
  static async findAll(req: Request, res: Response) {
    const productVarietiesRepository = new ProductVarietiesRepository()
    const rawProductVarieties = await productVarietiesRepository.findAll()

    res.status(200).json({ productVarieties: rawProductVarieties })

    return
  }

  @WithExpressErrorHandling
  static async findByTypeId(req: Request, res: Response, next: NextFunction) {
    const validator = new ZodValidator(idParams)
    validator.validate(req.params)

    const productVarietiesRepository = new ProductVarietiesRepository()
    const rawProductVarieties = await productVarietiesRepository.findByTypeId(
      parseInt(req.params.id),
    )

    res.status(200).json({ productVarieties: rawProductVarieties })

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
