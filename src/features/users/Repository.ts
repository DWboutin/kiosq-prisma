import { PrismaClient } from '@prisma/client'
import { WithPrismaDB } from '/utils/decorators/WithPrismaDb'
import { prismaClient } from '/utils/PrismaORMClient'

@WithPrismaDB
export class UserRepository implements IRepository {
  private prisma: PrismaClient

  constructor() {
    this.prisma = prismaClient
  }

  async create(data: UserData) {
    return await this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email.toLowerCase(),
        password: data.password,
      },
    })
  }

  async findAll() {
    return await this.prisma.user.findMany()
  }

  async findById(id: string) {
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    })
  }

  async update(id: string, data: Partial<UserData>) {
    return await this.prisma.user.update({
      where: {
        id,
      },
      data,
    })
  }

  async delete(id: string) {
    return await this.prisma.user.delete({
      where: {
        id,
      },
    })
  }

  async findByEmail(email: string) {
    return await this.prisma.user.findUnique({
      where: {
        email: email.toLowerCase(),
      },
    })
  }
}
