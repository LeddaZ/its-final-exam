import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Request } from '../../entities/request.entity'
import { RequestService } from '../../services/request.service'
import { CategoryService } from '../../services/category.service'
import { Category } from '../../entities/category.entity'

@Component({
  selector: 'app-edit-request-modal',
  templateUrl: './edit-request-modal.component.html'
})
export class EditRequestModalComponent {
  categories: Category[] = []
  category!: string
  item!: string
  quantity!: number
  unitPrice!: number
  reason!: string

  @Input() request!: Request

  @Output() editRequest = new EventEmitter<[string, string, string, number, number, string]>()

  constructor(
    protected requestSrv: RequestService,
    protected categorySrv: CategoryService
  ) {}

  ngOnInit(): void {
    this.categorySrv.fetch().subscribe((categories) => {
      this.categories = categories
    })
    this.category = this.request.category.id
    this.item = this.request.item
    this.quantity = this.request.quantity
    this.unitPrice = this.request.unitPrice
    this.reason = this.request.reason
  }

  edit() {
    this.editRequest.emit([
      this.request.id,
      this.category,
      this.item,
      this.quantity,
      this.unitPrice,
      this.reason
    ])
  }

  reset() {
    // this.date = ''
  }
}
