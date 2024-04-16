import { NextFunction, Request, Response } from 'express'
import { WithExpressErrorHandling } from '/utils/decorators/WithExpressErrorHandling'
import { ProductSizes } from '/features/productSizes/Repository'
import { ProductSizesPrices } from '/features/productSizesPrices/Repository'
import { ZodValidator } from '/utils/ZodValidator'
import { productSizesPricesCreationSchema } from '/features/productSizesPrices/validationSchema'

export class ProductSizesPricesController {
  @WithExpressErrorHandling
  static async create(req: Request, res: Response) {
    const validator = new ZodValidator(productSizesPricesCreationSchema)
    validator.validate(req.body)

    const productSizesPrices = new ProductSizesPrices()
    const rawProductSizesPrices = await productSizesPrices.create({
      productId: req.body.productId,
      sizeId: req.body.sizeId,
      price: req.body.price,
      quantity: req.body.quantity,
    })

    res.status(201).json({ rawProductSizesPrices })

    return
  }
  @WithExpressErrorHandling
  static async findAll(req: Request, res: Response) {
    const productSizesPricesRepository = new ProductSizesPrices()
    const rawProductSizesPrices = await productSizesPricesRepository.findAll()

    res.status(200).json({ productSizesPrices: rawProductSizesPrices })

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
