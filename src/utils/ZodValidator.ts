import { ZodIssueBase, ZodType } from 'zod'
import { InputValidationException } from '/exceptions/InputValidationException'

export class ZodValidator {
  constructor(private schema: ZodType) {}

  validate(data: any) {
    try {
      const result = this.schema.parse(data)

      return result.data
    } catch (err: any) {
      throw new InputValidationException(this.formatErrors(err.errors))
    }
  }

  formatErrors(errors: ZodIssueBase[]) {
    const errorObj: Record<string, ZodIssueBase> = {}

    errors.forEach((error) => {
      errorObj[error.path[0] as string] = error
    })

    return errorObj
  }
}
