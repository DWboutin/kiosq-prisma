import { PrismaClient } from '@prisma/client'
import { WithPrismaDB } from '/utils/decorators/WithPrismaDb'

@WithPrismaDB
export class ProductSizes implements IRepository {
  private prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }

  async create(data: ProductSizeData) {
    return await this.prisma.productSize.create({
      data: {
        name: data.name,
      },
    })
  }

  async findAll() {
    return await this.prisma.productSize.findMany()
  }

  async findById(id: number) {
    return await this.prisma.productSize.findUnique({
      where: {
        id,
      },
    })
  }

  async update(id: number, data: Partial<ProductSizeData>) {
    return await this.prisma.productSize.update({
      where: {
        id,
      },
      data,
    })
  }

  async delete(id: number) {
    return await this.prisma.productSize.delete({
      where: {
        id,
      },
    })
  }
}
