export class PrismaDBException extends Error {
  constructor(public error: Record<string, any>) {
    let message = `Prisma DB exception`

    super(message)

    if (error.code === 'P2002') {
      message = `A ${error.meta.modelName} with the same ${error.meta.target} already exists`
    }

    this.message = message
    this.name = 'PrismaDBException'

    Error.captureStackTrace(this, PrismaDBException)
  }
}
