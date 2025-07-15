import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Category } from '../../entities/category.entity'
import { CategoryService } from '../../services/category.service'

@Component({
  selector: 'app-edit-category-modal',
  templateUrl: './edit-category-modal.component.html'
})
export class EditCategoryModalComponent {
  description!: string

  @Input() category!: Category

  @Output() editCategory = new EventEmitter<[string, string]>()

  constructor(protected categorySrv: CategoryService) {}

  ngOnInit(): void {
    this.description = this.category.description
  }

  edit() {
    this.editCategory.emit([this.category.id, this.description])
  }
}
