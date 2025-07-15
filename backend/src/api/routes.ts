import { Router } from 'express'
import categoryRouter from './category/category.router'
import requestRouter from './request/request.router'
import userRouter from './user/user.router'
import authRouter from './auth/auth.router'

const router = Router()

router.use('/categories', categoryRouter)
router.use('/requests', requestRouter)
router.use('/users', userRouter)
router.use(authRouter)

export default router
