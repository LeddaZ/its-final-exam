import { RequestStatus } from '../utils/enums'
import { Category } from './category.entity'
import { User } from './user.entity'

export interface Request {
  id: string
  date: string
  category: Category
  item: string
  quantity: number
  unitPrice: number
  reason: string
  status: RequestStatus
  requester: User
  approvalDate?: string
  approver?: User
}
