import { PrismaClient } from '@prisma/client'
import { WithPrismaDB } from '/utils/decorators/WithPrismaDb'
import { prismaClient } from '/utils/PrismaORMClient'

@WithPrismaDB
export class ProductsRepository implements IRepository {
  private prisma: PrismaClient

  constructor() {
    this.prisma = prismaClient
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
        authorId: data.authorId,
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

  async findByIdAndAuthorId(id: number, authorId: string) {
    return await this.prisma.product.findUnique({
      where: {
        id,
        authorId,
      },
      include: {
        productSizePrice: true,
      },
    })
  }

  async findAllByAuthorId(authorId: string) {
    return await this.prisma.product.findMany({
      where: {
        authorId,
      },
      include: {
        productSizePrice: true,
        category: true,
        type: true,
        variety: true,
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
