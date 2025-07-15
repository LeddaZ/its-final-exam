import mongoose from 'mongoose'
import { Request } from './request.entity'
import { RequestStatus } from '../../utils/enums'

const requestSchema = new mongoose.Schema<Request>({
  date: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  item: String,
  quantity: Number,
  unitPrice: Number,
  reason: String,
  status: {
    type: String,
    enum: Object.values(RequestStatus),
    default: RequestStatus.PENDING,
    required: true
  },
  requester: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  approvalDate: String,
  approver: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

requestSchema.set('toJSON', {
  virtuals: true,
  transform: (_, ret) => {
    delete ret._id
    delete ret.__v
    return ret
  }
})

export const RequestModel = mongoose.model<Request>('Request', requestSchema)
