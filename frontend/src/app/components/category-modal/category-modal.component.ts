import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.component.html'
})
export class CategoryModalComponent {
  description!: string

  @Output() addCategory = new EventEmitter<[string]>()

  constructor() {}

  ngOnInit(): void {
    this.reset()
  }

  add() {
    this.addCategory.emit([this.description])
  }

  reset() {
    this.description = ''
  }
}
