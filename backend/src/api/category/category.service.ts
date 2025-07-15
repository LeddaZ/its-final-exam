import { NotFoundError } from '../../errors/not-found'
import { Category } from './category.entity'
import { CategoryModel } from './category.model'

export class CategoryService {
  async list(): Promise<Category[]> {
    return await CategoryModel.find()
  }

  async add(category: Partial<Omit<Category, 'id'>>): Promise<Category> {
    const newItem = await CategoryModel.create({
      ...category
    })
    return (await this.getById(newItem.id))!
  }

  async remove(id: string): Promise<Category> {
    // TODO: check if the category is used in any request
    const existing = await CategoryModel.findOne({
      _id: id
    })
    if (!existing) {
      throw new NotFoundError()
    }

    await CategoryModel.deleteOne({
      _id: id
    })

    return existing
  }

  async update(id: string, description: string): Promise<Category> {
    const existing = await CategoryModel.findOne({
      _id: id
    })
    if (!existing) {
      throw new NotFoundError()
    }

    Object.assign(existing, {
      description
    })
    await existing.save()
    const updated = await this.getById(id)
    return updated!
  }

  async getById(id: string): Promise<Category | null> {
    const item = await CategoryModel.findOne({
      _id: id
    })

    if (!item) {
      return null
    }

    return item
  }
}

export default new CategoryService()
