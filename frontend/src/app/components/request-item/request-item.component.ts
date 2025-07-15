import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Request } from '../../entities/request.entity'
import { RequestService } from '../../services/request.service'
import { User } from '../../entities/user.entity'

@Component({
  selector: 'app-request-item',
  templateUrl: './request-item.component.html'
})
export class RequestItemComponent {
  @Input() request!: Request

  @Input() user: User | null | undefined = null

  @Output() editRequest = new EventEmitter<[string, string, string, number, number, string]>()

  @Output() deleteRequestEvent = new EventEmitter<void>()

  constructor(private requestSrv: RequestService) {}

  onEditRequest(eventData: [string, string, string, number, number, string]) {
    this.editRequest.emit(eventData)
  }

  deleteRequest() {
    this.requestSrv.remove(this.request.id).subscribe(() => {
      this.deleteRequestEvent.emit()
    })
  }

  approveRequest() {
    this.requestSrv.approve(this.request.id).subscribe(() => {
      this.deleteRequestEvent.emit()
    })
  }

  rejectRequest() {
    this.requestSrv.reject(this.request.id).subscribe(() => {
      this.deleteRequestEvent.emit()
    })
  }
}
