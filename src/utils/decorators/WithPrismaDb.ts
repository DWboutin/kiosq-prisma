import { PrismaDBException } from '/exceptions/PrismaDBException'

export function WithPrismaDB(target: any) {
  const originalMethods = Object.getOwnPropertyNames(target.prototype)

  originalMethods.forEach((methodName) => {
    const originalMethod = target.prototype[methodName]

    target.prototype[methodName] = async function (...args: any[]) {
      try {
        const result = await originalMethod.apply(this, args)
        return result
      } catch (err: any) {
        throw new PrismaDBException(err)
      } finally {
        await await this.prisma.$disconnect()
      }
    }
  })

  return target
}
