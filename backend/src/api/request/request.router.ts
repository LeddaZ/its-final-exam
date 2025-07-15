import express from 'express'
import { isAuthenticated } from '../../utils/auth/authenticated-middleware'
import { validate } from '../../utils/validation-middleware'
import { add, approve, getById, list, reject, remove, update } from './request.controller'
import { CreateRequestDTO } from './request.dto'

const router = express.Router()

router.use(isAuthenticated)
router.get('/', list)
router.get('/:id', getById)
router.post('/', validate(CreateRequestDTO), add)
router.delete('/:id', remove)
router.patch('/:id', validate(CreateRequestDTO), update)
router.patch('/approve/:id', approve)
router.patch('/reject/:id', reject)

export default router
