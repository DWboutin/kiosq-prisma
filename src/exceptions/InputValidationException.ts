export class InputValidationException extends Error {
  constructor(public errors: Record<string, any>) {
    const message = `Input validation errors`

    super(message)

    this.message = message
    this.name = 'InputValidationException'

    Error.captureStackTrace(this, InputValidationException)
  }
}
