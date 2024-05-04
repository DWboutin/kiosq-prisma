import { Request, Response } from 'express'
import { WithExpressErrorHandling } from '/utils/decorators/WithExpressErrorHandling'
import { ProductSizesPricesRepository } from '/features/productSizesPrices/Repository'
import { ZodValidator } from '/utils/ZodValidator'
import { productSizesPricesCreationSchema } from '/features/productSizesPrices/validationSchema'

export class ProductSizesPricesController {
  @WithExpressErrorHandling
  static async create(req: Request, res: Response) {
    const productId = parseInt(req.params.productId)

    const validator = new ZodValidator(productSizesPricesCreationSchema)
    validator.validate(req.body)

    const productSizesPrices = new ProductSizesPricesRepository()
    const rawProductSizesPrices = await productSizesPrices.create({
      productId: productId,
      sizeId: req.body.sizeId,
      price: req.body.price,
      quantity: req.body.quantity,
    })

    res.status(201).json({ rawProductSizesPrices })

    return
  }
  @WithExpressErrorHandling
  static async findAll(req: Request, res: Response) {
    const productId = parseInt(req.params.productId)

    const productSizesPricesRepository = new ProductSizesPricesRepository()
    const rawProductSizesPrices = await productSizesPricesRepository.findAll(productId)

    res.status(200).json({ productSizesPrices: rawProductSizesPrices })

    return
  }

  @WithExpressErrorHandling
  static async update(req: Request, res: Response) {
    const productId = parseInt(req.params.productId)
    const sizeId = parseInt(req.params.sizeId)

    const productSizesPricesRepository = new ProductSizesPricesRepository()
    const rawProductSizesPrices = await productSizesPricesRepository.update({
      productId: productId,
      sizeId: sizeId,
      price: req.body.price,
      quantity: req.body.quantity,
    })

    res.status(200).json({ productSizesPrices: rawProductSizesPrices })

    return
  }

  @WithExpressErrorHandling
  static async delete(req: Request, res: Response) {
    const productId = parseInt(req.params.productId)
    const sizeId = parseInt(req.params.sizeId)

    const productSizesPricesRepository = new ProductSizesPricesRepository()
    productSizesPricesRepository.delete({
      productId: productId,
      sizeId: sizeId,
    })

    res.status(204).send()

    return
  }
}
