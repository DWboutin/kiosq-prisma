import { NextFunction, Request, Response } from 'express'
import { WithExpressErrorHandling } from '/utils/decorators/WithExpressErrorHandling'
import { ProductSizes } from '/features/productSizes/Repository'

export class ProductSizesController {
  @WithExpressErrorHandling
  static async create(req: Request, res: Response) {
    res.status(401).json({ message: 'Not implemented' })

    return
  }

  @WithExpressErrorHandling
  static async findAll(req: Request, res: Response) {
    const productSizesRepository = new ProductSizes()
    const rawProductSizes = await productSizesRepository.findAll()

    res.status(200).json({ productSizes: rawProductSizes })

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
