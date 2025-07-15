import { NextFunction, Request, Response } from 'express'
import { Types } from 'mongoose'
import { TypedRequest } from '../../utils/typed-request.interface'
import requestService from './request.service'
import { CreateRequestDTO } from './request.dto'
import { Request as RequestEntity } from './request.entity'
import { UserNotFoundError } from '../../errors/user-not-found'
import { RequestStatus } from '../../utils/enums'
import { UnauthorizedError } from '../../errors/unauthorized'

export const list = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.user
    const results = await requestService.list(user!.id)
    res.json(results)
  } catch (err) {
    next(err)
  }
}

export const getById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const results = await requestService.getById(id)
    res.json(results)
  } catch (err) {
    next(err)
  }
}

export const add = async (
  req: TypedRequest<CreateRequestDTO>,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = req.user
    if (!user) {
      throw new UserNotFoundError()
    }
    const requester = user.id
    const date = new Date().toDateString()
    const { category, item, quantity, unitPrice, reason } = req.body
    const newItem: Partial<Omit<RequestEntity, 'id'>> = {
      date: date,
      category: new Types.ObjectId(category),
      item: item,
      quantity: quantity,
      unitPrice: unitPrice,
      reason: reason,
      status: RequestStatus.PENDING,
      requester: new Types.ObjectId(requester)
    }

    const saved = await requestService.add(newItem)
    res.status(201).json(saved)
  } catch (err) {
    next(err)
  }
}

export const remove = async (
  req: TypedRequest<CreateRequestDTO>,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = req.user
    if (!user) {
      throw new UserNotFoundError()
    }
    const userId = user.id
    if (!userId) {
      throw new UnauthorizedError()
    }
    const { id } = req.params
    const saved = await requestService.remove(id, userId)
    res.status(200).json(saved)
  } catch (err) {
    next(err)
  }
}

export const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.user
    if (!user) {
      throw new UserNotFoundError()
    }
    const userId = user.id
    if (!userId) {
      throw new UnauthorizedError()
    }
    const { id } = req.params
    const { category, item, quantity, unitPrice, reason } = req.body
    const updated = await requestService.update(
      id,
      userId,
      category,
      item,
      quantity,
      unitPrice,
      reason
    )
    res.json(updated)
  } catch (err) {
    next(err)
  }
}

export const approve = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.user
    if (!user) {
      throw new UserNotFoundError()
    }
    if (!user.admin) {
      throw new UnauthorizedError()
    }
    const userId = user.id
    if (!userId) {
      throw new UnauthorizedError()
    }
    const { id } = req.params
    const updated = await requestService.setStatus(id, userId, 'approved')
    res.json(updated)
  } catch (err) {
    next(err)
  }
}

export const reject = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.user
    if (!user) {
      throw new UserNotFoundError()
    }
    if (!user.admin) {
      throw new UnauthorizedError()
    }
    const userId = user.id
    if (!userId) {
      throw new UnauthorizedError()
    }
    const { id } = req.params
    const updated = await requestService.setStatus(id, userId, 'rejected')
    res.json(updated)
  } catch (err) {
    next(err)
  }
}
