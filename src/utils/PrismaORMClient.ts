import { PrismaClient } from '@prisma/client'

class PrismaORMClient {
  private static instance: PrismaORMClient
  private prisma: PrismaClient

  private constructor() {
    this.prisma = new PrismaClient()
  }

  public static getInstance(): PrismaORMClient {
    if (!PrismaORMClient.instance) {
      PrismaORMClient.instance = new PrismaORMClient()
    }
    return PrismaORMClient.instance
  }

  public getPrisma(): PrismaClient {
    return this.prisma
  }
}

export const prismaClient = PrismaORMClient.getInstance().getPrisma()
