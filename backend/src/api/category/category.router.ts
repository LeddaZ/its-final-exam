import express from 'express'
import { isAuthenticated } from '../../utils/auth/authenticated-middleware'
import { validate } from '../../utils/validation-middleware'
import { CreateCategoryDTO } from './category.dto'
import { add, list, remove, update } from './category.controller'

const router = express.Router()

router.use(isAuthenticated)
router.get('/', list)
router.post('/', validate(CreateCategoryDTO), add)
router.delete('/:id', remove)
router.patch('/:id', validate(CreateCategoryDTO), update)

export default router
