import express from 'express'
import { isAuthenticated } from '../../utils/auth/authenticated-middleware'
import { validate } from '../../utils/validation-middleware'
import { add, list, remove, update } from './request.controller'
import { CreateRequestDTO } from './request.dto'

const router = express.Router()

router.use(isAuthenticated)
router.get('/', list)
router.post('/', validate(CreateRequestDTO), add)
router.delete('/:id', remove)
router.patch('/:id', validate(CreateRequestDTO), update)

export default router
