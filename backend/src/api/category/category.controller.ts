import { NextFunction, Request, Response } from 'express'
import { TypedRequest } from '../../utils/typed-request.interface'
import { CreateCategoryDTO } from './category.dto'
import { Category } from './category.entity'
import categoryService from './category.service'

export const list = async (_: Request, res: Response, next: NextFunction) => {
  try {
    const results = await categoryService.list()
    res.json(results)
  } catch (err) {
    next(err)
  }
}

export const add = async (req: TypedRequest<CreateCategoryDTO>, res: Response, next: NextFunction) => {
  try {
    const user = req.user
    if (!user || !user.admin) {
      res.status(403).json({ message: "You don't have permission to perform this action." })
    }
    const { description } = req.body
    const newItem: Partial<Omit<Category, 'id'>> = {
      description: description
    }

    const saved = await categoryService.add(newItem)
    res.status(201).json(saved)
  } catch (err) {
    next(err)
  }
}

export const remove = async (
  req: TypedRequest<CreateCategoryDTO>,
  res: Response,
  next: NextFunction
) => {
  try {
    // TODO: check if the category is used in any request
    const user = req.user
    if (!user || !user.admin) {
      res.status(403).json({ message: "You don't have permission to perform this action." })
    }
    const { id } = req.params
    const saved = await categoryService.remove(id)
    res.status(200).json(saved)
  } catch (err) {
    next(err)
  }
}

export const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.user
    if (!user || !user.admin) {
      res.status(403).json({ message: "You don't have permission to perform this action." })
    }
    const { id } = req.params
    const { description } = req.body
    const updated = await categoryService.update(id, description)
    res.json(updated)
  } catch (err) {
    next(err)
  }
}
