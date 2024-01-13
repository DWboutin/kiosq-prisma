import express, { NextFunction, Request, Response } from 'express'
import compression from 'compression'
import { router } from '/router'

export const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(compression())

app.use(router)

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    message: err.message,
    ...err,
  })
  return next()
})
