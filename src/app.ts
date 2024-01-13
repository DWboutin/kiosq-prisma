import express from 'express'
import compression from 'compression'
import passport from 'passport'
import { router } from '/router'
import { errorHandling } from '/middlewares/errorHandling'
import { passportJwtStrategy } from '/middlewares/passportJwtStrategy'

export const app = express()

passportJwtStrategy(passport)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(compression())
app.use(passport.initialize())

app.use(router)

// to test the jwt token strategy
app.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.send('You have accessed a protected route!')
})

app.use(errorHandling)
