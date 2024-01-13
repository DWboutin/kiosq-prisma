export function WithPrismaDB(target: any) {
  const originalMethods = Object.getOwnPropertyNames(target.prototype)

  originalMethods.forEach((methodName) => {
    const originalMethod = target.prototype[methodName]

    target.prototype[methodName] = async function (...args: any[]) {
      try {
        const result = await originalMethod.apply(this, args)
        return result
      } catch (err: any) {
        console.error(err)
        process.exit(1)
      } finally {
        await await this.prisma.$disconnect()
      }
    }
  })

  return target
}
