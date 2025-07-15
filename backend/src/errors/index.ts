import { notFoundHandler } from './not-found'
import { pastDateHandler } from './past-date'
import { unauthorizedHandler } from './unauthorized'
import { userNotFoundHandler } from './user-not-found'
import { validationErrorHandler } from './validation'

export const errorHandlers = [
  notFoundHandler,
  pastDateHandler,
  unauthorizedHandler,
  userNotFoundHandler,
  validationErrorHandler
]
