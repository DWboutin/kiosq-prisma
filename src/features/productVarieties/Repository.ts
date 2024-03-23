import { PrismaClient } from '@prisma/client'
import { WithPrismaDB } from '/utils/decorators/WithPrismaDb'

@WithPrismaDB
export class ProductVarietiesRepository implements IRepository {
  private prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }

  async create(data: ProductVarietyData) {
    return await this.prisma.productVariety.create({
      data: {
        name: data.name,
        categoryId: data.categoryId,
        typeId: data.typeId,
      },
    })
  }

  async findAll() {
    return await this.prisma.productVariety.findMany({
      include: {
        category: true,
        type: true,
      },
    })
  }

  async findById(id: number) {
    return await this.prisma.productVariety.findUnique({
      where: {
        id,
      },
    })
  }

  async update(id: number, data: Partial<ProductVarietyData>) {
    return await this.prisma.productVariety.update({
      where: {
        id,
      },
      data,
    })
  }

  async delete(id: number) {
    return await this.prisma.productVariety.delete({
      where: {
        id,
      },
    })
  }

  async findByTypeId(typeId: number) {
    return await this.prisma.productVariety.findMany({
      where: {
        typeId,
      },
    })
  }
}
