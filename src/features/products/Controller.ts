import { Request, Response } from 'express'
import { WithExpressErrorHandling } from '/utils/decorators/WithExpressErrorHandling'
import { ZodValidator } from '/utils/ZodValidator'
import { productCreationSchema, productUpdateSchema } from '/features/products/validationSchema'
import { ProductsRepository } from '/features/products/Repository'
import { ProductSizesPricesRepository } from '/features/productSizesPrices/Repository'
import { CheckIfUserOwnsProduct } from '/features/products/decorators'

export class ProductsController {
  @WithExpressErrorHandling
  static async create(req: Request, res: Response) {
    const validator = new ZodValidator(productCreationSchema)
    validator.validate(req.body)

    const authenticatedUser = req.user as User
    const {
      name,
      categoryId,
      typeId,
      varietyId,
      startPeriod,
      startMonth,
      endPeriod,
      endMonth,
      sizesAndPrices,
    } = req.body
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
      authorId: authenticatedUser.id,
    })
    const productSizesPricesRepository = new ProductSizesPricesRepository()
    const productSizesPrices = await Promise.all(
      sizesAndPrices.map((sizesAndPrice: ProductSizePriceData) =>
        productSizesPricesRepository.create({
          ...sizesAndPrice,
          productId: product.id,
        }),
      ),
    )

    res.status(201).json({
      product: {
        ...product,
        productSizePrice: productSizesPrices,
      },
    })

    return
  }

  @WithExpressErrorHandling
  static async findAll(req: Request, res: Response) {
    const productsRepository = new ProductsRepository()
    const products = await productsRepository.findAll()

    res.status(200).json({ products })

    return
  }

  @WithExpressErrorHandling
  static async findById(req: Request, res: Response) {
    const productId = parseInt(req.params.id)

    const productsRepository = new ProductsRepository()
    const product = await productsRepository.findById(productId)

    if (!product) {
      res.status(404).json({ product: null })

      return
    }

    res.status(200).json({ product })

    return
  }

  @WithExpressErrorHandling
  @CheckIfUserOwnsProduct
  static async update(req: Request, res: Response) {
    const validator = new ZodValidator(productUpdateSchema)
    validator.validate(req.body)

    const infoToUpdate = { ...req.body, sizesAndPrices: undefined }
    const sizesAndPrices = req.body.sizesAndPrices

    const productId = parseInt(req.params.id)

    const productsRepository = new ProductsRepository()
    const productSizesPricesRepository = new ProductSizesPricesRepository()

    await Promise.all([
      await productsRepository.update(productId, infoToUpdate),
      await Promise.all(
        sizesAndPrices.map((sizesAndPrice: ProductSizePriceData) =>
          productSizesPricesRepository.update({
            ...sizesAndPrice,
            productId,
          }),
        ),
      ),
    ])

    const product = await productsRepository.findById(productId)

    res.status(200).json({ product })

    return
  }

  @WithExpressErrorHandling
  @CheckIfUserOwnsProduct
  static async delete(req: Request, res: Response) {
    const productId = parseInt(req.params.id)

    const productsRepository = new ProductsRepository()
    await productsRepository.delete(productId)

    res.status(204).send()

    return
  }

  @WithExpressErrorHandling
  static async findAllForAuhtorId(req: Request, res: Response) {
    const authorId = req.params.id

    const productsRepository = new ProductsRepository()
    const products = await productsRepository.findAllByAuthorId(authorId)

    res.status(200).json({ products })

    return
  }
}
