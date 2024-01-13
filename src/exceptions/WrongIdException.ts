export class WrongIdException extends Error {
  constructor() {
    const message = 'The id provided is not a number'

    super(message)

    this.message = message
    this.name = 'WrongIdException'

    Error.captureStackTrace(this, WrongIdException)
  }
}
