import { NotFoundError } from '../../errors/not-found'
import { RequestModel } from './request.model'
import { Request } from './request.entity'

export class RequestService {
  async list(): Promise<Request[]> {
    return await RequestModel.find().sort({ dueDate: 1 }).populate('requester').populate('approver')
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
