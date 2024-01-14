import bcrypt from 'bcrypt'
import { envVariableGetter } from '/utils/envVariableGetter'

const saltRounds = parseInt(envVariableGetter('CRYPTER_SALT_ROUNDS') as string)

export class Encrypter {
  static async hash(value: string): Promise<string> {
    const salt = await bcrypt.genSalt(saltRounds)

    return await bcrypt.hash(value, salt)
  }

  static async compare(value: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(value, hash)
  }
}
