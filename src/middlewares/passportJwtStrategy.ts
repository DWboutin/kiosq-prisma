import { PassportStatic } from 'passport'
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
import { UserRepository } from '/features/users/Repository'
import { envVariableGetter } from '/utils/envVariableGetter'

const secret = envVariableGetter('JWT_TOKEN_SECRET') as string
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secret,
}

export const passportJwtStrategy = (passport: PassportStatic) => {
  passport.use(
    new JwtStrategy(opts, async (jwtPayload, done) => {
      const userRepository = new UserRepository()
      const user = await userRepository.findByCredentials(jwtPayload.username, jwtPayload.password)

      if (user) {
        return done(null, user)
      }

      return done(null, false)
    }),
  )
}
