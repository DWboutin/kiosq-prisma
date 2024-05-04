import { NextFunction, Request, Response } from 'express'
import { WithExpressErrorHandling } from '/utils/decorators/WithExpressErrorHandling'
import { ProductCategoriesRepository } from '/features/productCategories/Repository'

export class ProductCategoriesController {
  @WithExpressErrorHandling
  static async create(req: Request, res: Response) {
    res.status(401).json({ message: 'Not implemented' })

    return
  }

  @WithExpressErrorHandling
  static async findAll(req: Request, res: Response) {
    const productCategoriesRepository = new ProductCategoriesRepository()
    const rawProductCategories = await productCategoriesRepository.findAll()

    res.status(200).json({ productCategories: rawProductCategories })

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
