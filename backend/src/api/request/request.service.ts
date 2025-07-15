import { NotFoundError } from '../../errors/not-found'
import { RequestModel } from './request.model'
import { Request } from './request.entity'
import { UserModel } from '../user/user.model'
import { UnauthorizedError } from '../../errors/unauthorized'

export class RequestService {
  async list(userId: string | undefined): Promise<Request[]> {
    const user = await UserModel.findById(userId)
    if (user!.admin) {
      return await RequestModel.find()
        .sort({ date: 1 })
        .populate('requester')
        .populate('approver')
        .populate('category')
    } else {
      return await RequestModel.find({ requester: userId })
        .sort({ date: 1 })
        .populate('requester')
        .populate('approver')
        .populate('category')
    }
  }

  async add(request: Partial<Omit<Request, 'id'>>): Promise<Request> {
    const newItem = await RequestModel.create({
      ...request
    })
    return (await this.getById(newItem.id))!
  }

  async remove(id: string): Promise<Request> {
    // TODO solo se propria e da approvare
    const existing = await RequestModel.findOne({
      _id: id
    })
    if (!existing) {
      throw new NotFoundError()
    }

    await RequestModel.deleteOne({
      _id: id
    })

    return existing
  }

  async update(
    id: string,
    userId: string,
    category: string,
    item: string,
    quantity: number,
    unitPrice: number,
    reason: string
  ): Promise<Request> {
    const existing = await RequestModel.findOne({
      _id: id
    })
    if (!existing) {
      throw new NotFoundError()
    }

    const requester = existing.requester

    if (userId !== requester.toString()) {
      throw new UnauthorizedError()
    }

    Object.assign(existing, {
      date: existing.date,
      category,
      item,
      quantity,
      unitPrice,
      reason,
      status: existing.status,
      requester: existing.requester,
      approvalDate: existing.approvalDate,
      approver: existing.approver
    })
    await existing.save()
    const updated = await this.getById(id)
    return updated!
  }

  async getById(id: string): Promise<Request | null> {
    const item = await RequestModel.findOne({
      _id: id
    })

    if (!item) {
      return null
    }

    return item
  }
}

export default new RequestService()
