import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Request } from '../../entities/request.entity'

@Component({
  selector: 'app-request-item',
  templateUrl: './request-item.component.html'
})
export class RequestItemComponent {
  @Input()
  request!: Request

  @Output() editRequest = new EventEmitter<[string, string, string, number, number, string]>()

  constructor() {}

  onEditRequest(eventData: [string, string, string, number, number, string]) {
    this.editRequest.emit(eventData)
  }
}
