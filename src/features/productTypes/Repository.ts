import { PrismaClient } from '@prisma/client'
import { WithPrismaDB } from '/utils/decorators/WithPrismaDb'
import { prismaClient } from '/utils/PrismaORMClient'

@WithPrismaDB
export class ProductTypesRepository implements IRepository {
  private prisma: PrismaClient

  constructor() {
    this.prisma = prismaClient
  }

  async create(data: ProductTypeData) {
    return await this.prisma.productType.create({
      data: {
        name: data.name,
        categoryId: data.categoryId,
      },
    })
  }

  async findAll() {
    return await this.prisma.productType.findMany({
      include: {
        category: true,
      },
    })
  }

  async findById(id: number) {
    return await this.prisma.productType.findUnique({
      where: {
        id,
      },
    })
  }

  async update(id: number, data: Partial<ProductTypeData>) {
    return await this.prisma.productType.update({
      where: {
        id,
      },
      data,
    })
  }

  async delete(id: number) {
    return await this.prisma.productType.delete({
      where: {
        id,
      },
    })
  }

  async findByCategoryId(categoryId: number) {
    return await this.prisma.productType.findMany({
      where: {
        categoryId,
      },
    })
  }
}
