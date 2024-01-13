export class PrismaDBException extends Error {
  constructor(public error: Record<string, any>) {
    let message = `Prisma DB exception`

    super(message)

    if (error.code === 'P2002') {
      message = 'There is a unique constraint violation'
    }

    this.message = message
    this.name = 'PrismaDBException'

    Error.captureStackTrace(this, PrismaDBException)
  }
}
