import { PrismaClient } from '@prisma/client'
import { WithPrismaDB } from '/utils/decorators/WithPrismaDb'
import { prismaClient } from '/utils/PrismaORMClient'

@WithPrismaDB
export class ProductSizesPricesRepository implements IRepositoryWithMultiplePrimaryKeys {
  private prisma: PrismaClient

  constructor() {
    this.prisma = prismaClient
  }

  async create(data: ProductSizePriceDataWithProductId) {
    return await this.prisma.productSizePrice.create({
      data: {
        productId: data.productId,
        sizeId: data.sizeId,
        price: data.price,
        quantity: data.quantity,
      },
    })
  }

  async findAll(productId: number) {
    return await this.prisma.productSizePrice.findMany({
      where: { productId },
    })
  }

  async findUnique({ productId, sizeId }: ProductSizePriceUniqueContraint) {
    return await this.prisma.productSizePrice.findUnique({
      where: {
        productSizePrice: { productId, sizeId },
      },
    })
  }

  async update(data: ProductSizePriceDataWithProductId) {
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

  async delete({ productId, sizeId }: ProductSizePriceUniqueContraint) {
    return await this.prisma.productSizePrice.delete({
      where: {
        productSizePrice: { productId, sizeId },
      },
    })
  }
}
