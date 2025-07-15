import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { Category } from '../../entities/category.entity'
import { CategoryService } from '../../services/category.service'

@Component({
  selector: 'app-request-modal',
  templateUrl: './request-modal.component.html'
})
export class RequestModalComponent implements OnInit {
  categories: Category[] = []
  category!: string
  item!: string
  quantity!: number
  unitPrice!: number
  reason!: string

  @Output() addRequest = new EventEmitter<[string, string, number, number, string]>()

  constructor(protected categorySrv: CategoryService) {}

  ngOnInit(): void {
    this.categorySrv.fetch().subscribe((categories) => {
      this.categories = categories
    })
    this.reset()
  }

  add() {
    this.addRequest.emit([this.category, this.item, this.quantity, this.unitPrice, this.reason])
  }

  reset() {
    this.category = ''
    this.item = ''
    this.quantity = 0
    this.unitPrice = 0
    this.reason = ''
  }
}
