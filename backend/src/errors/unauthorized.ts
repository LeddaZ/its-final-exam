import { Request, Response, NextFunction } from 'express'

export class UnauthorizedError extends Error {
  constructor() {
    super("You don't have permission to perform this action.")
  }
}

export const unauthorizedHandler = (
  err: Error,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof UnauthorizedError) {
    res.status(403)
    res.json({
      error: 'UnauthorizedError',
      message: err.message
    })
  } else {
    next(err)
  }
}
