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
    })
  }

  async findAll() {
    return await this.prisma.product.findMany()
  }

  async findById(id: number) {
    return await this.prisma.product.findUnique({
      where: {
        id,
      },
    })
  }

  async update(id: number, data: Partial<ProductData>) {
    return await this.prisma.product.update({
      where: {
        id,
      },
      data,
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
