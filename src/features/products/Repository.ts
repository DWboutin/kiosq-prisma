import { PrismaClient } from '@prisma/client'
import { WithPrismaDB } from '/utils/decorators/WithPrismaDb'

@WithPrismaDB
export class ProductsRepository implements IRepository {
  private prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }

  async create(data: ProductData) {
    return await this.prisma.product.create({
      data: {
        name: data.name,
        categoryId: data.categoryId,
        typeId: data.typeId,
        varietyId: data.varietyId,
        startPeriod: data.startPeriod,
        startMonth: data.startMonth,
        endPeriod: data.endPeriod,
        endMonth: data.endMonth,
      },
      include: {
        productSizePrice: true,
      },
    })
  }

  async findAll() {
    return await this.prisma.product.findMany({
      include: {
        productSizePrice: true,
      },
    })
  }

  async findById(id: number) {
    return await this.prisma.product.findUnique({
      where: {
        id,
      },
      include: {
        productSizePrice: true,
      },
    })
  }

  async update(id: number, data: ProductData) {
    return await this.prisma.product.update({
      where: {
        id,
      },
      data,
      include: {
        productSizePrice: true,
      },
    })
  }

  async delete(id: number) {
    return await this.prisma.product.delete({
      where: {
        id,
      },
    })
  }
}
