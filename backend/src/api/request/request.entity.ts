import { Types } from 'mongoose'
import { RequestStatus } from '../../utils/enums'

export class Request {
  id: string
  date: string
  category: Types.ObjectId
  item: string
  quantity: number
  unitPrice: number
  reason: string
  status: RequestStatus
  requester: Types.ObjectId
  approvalDate?: string
  approver?: Types.ObjectId
}
