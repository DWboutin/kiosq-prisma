import jwt from 'jsonwebtoken'
import { envVariableGetter } from '/utils/envVariableGetter'

const secret = envVariableGetter('JWT_TOKEN_SECRET') as jwt.Secret
const expiresIn = envVariableGetter('JWT_TOKEN_EXPIRATION')

export class JwtTokenManager {
  static async generate(payload: any): Promise<string> {
    return await jwt.sign(payload, secret, { expiresIn })
  }

  static async verify(token: string): Promise<any> {
    return await jwt.verify(token, secret)
  }
}
