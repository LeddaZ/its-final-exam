import express from 'express'
import { isAuthenticated } from '../../utils/auth/authenticated-middleware'
import { validate } from '../../utils/validation-middleware'
import {
  add,
  approve,
  getByCategory,
  getById,
  list,
  listPending,
  reject,
  remove,
  update
} from './request.controller'
import { CreateRequestDTO } from './request.dto'

const router = express.Router()

router.use(isAuthenticated)
router.get('/', list)
router.get('/pending', listPending)
router.get('/category/:id', getByCategory)
router.get('/:id', getById)
router.post('/', validate(CreateRequestDTO), add)
router.delete('/:id', remove)
router.patch('/:id', validate(CreateRequestDTO), update)
router.patch('/approve/:id', approve)
router.patch('/reject/:id', reject)

export default router
