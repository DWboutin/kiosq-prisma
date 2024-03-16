import { PrismaClient } from '@prisma/client'
import { WithPrismaDB } from '/utils/decorators/WithPrismaDb'

@WithPrismaDB
export class ProductCategories implements IRepository {
  private prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }

  async create(data: ProductCategoryData) {
    return await this.prisma.productCategory.create({
      data: {
        name: data.name,
      },
    })
  }

  async findAll() {
    return await this.prisma.productCategory.findMany()
  }

  async findById(id: number) {
    return await this.prisma.productCategory.findUnique({
      where: {
        id,
      },
    })
  }

  async update(id: number, data: Partial<ProductCategoryData>) {
    return await this.prisma.productCategory.update({
      where: {
        id,
      },
      data,
    })
  }

  async delete(id: number) {
    return await this.prisma.productCategory.delete({
      where: {
        id,
      },
    })
  }
}
