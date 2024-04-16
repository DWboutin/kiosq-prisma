import { PrismaClient } from '@prisma/client'
import { WithPrismaDB } from '/utils/decorators/WithPrismaDb'

@WithPrismaDB
export class ProductSizesPrices implements IRepositoryWithMultiplePrimaryKeys {
  private prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }

  async create(data: ProductSizePriceData) {
    return await this.prisma.productSizePrice.create({
      data: {
        productId: data.productId,
        sizeId: data.sizeId,
        price: data.price,
        quantity: data.quantity,
      },
    })
  }

  async findAll() {
    return await this.prisma.productSizePrice.findMany()
  }

  async findUnique({ productId, sizeId }: ProductSizeUniqueContraint) {
    return await this.prisma.productSizePrice.findUnique({
      where: {
        productSizePrice: { productId, sizeId },
      },
    })
  }

  async update(data: ProductSizePriceData) {
    return await this.prisma.productSizePrice.update({
      where: {
        productSizePrice: { productId: data.productId, sizeId: data.sizeId },
      },
      data: {
        price: data.price,
        quantity: data.quantity,
      },
    })
  }

  async delete({ productId, sizeId }: ProductSizeUniqueContraint) {
    return await this.prisma.productSizePrice.delete({
      where: {
        productSizePrice: { productId, sizeId },
      },
    })
  }
}
