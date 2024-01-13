import { WrongIdException } from '/exceptions/WrongIdException'

export class GuardAgainstWrongId {
  static guard(id: number) {
    if (typeof id !== 'number') {
      throw new WrongIdException()
    }
  }
}
