import { NextFunction, Request, Response } from 'express'

export const errorHandling = (err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    message: err.message,
    ...err,
  })
  return next()
}
