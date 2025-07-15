import { Component, EventEmitter, Input, Output } from '@angular/core'
import { User } from '../../entities/user.entity'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  @Input() user: User | null | undefined = null

  @Output() logoutEvent = new EventEmitter<void>()

  constructor() {}

  logout() {
    this.logoutEvent.emit()
  }
}
