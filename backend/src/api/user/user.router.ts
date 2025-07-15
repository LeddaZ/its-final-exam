import { Router } from 'express'
import { me, users } from './user.controller'
import { isAuthenticated } from '../../utils/auth/authenticated-middleware'

const router = Router()

router.use(isAuthenticated)
router.get('/me', me)
router.get('/', users)

export default router
