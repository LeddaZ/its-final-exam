import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { UserService } from '../../services/user.service'
import { User } from '../../entities/user.entity'

@Component({
  selector: 'app-match-modal',
  templateUrl: './match-modal.component.html'
})
export class MatchModalComponent implements OnInit {
  minDate = Date()
  date!: string
  userIdA!: string
  userIdB!: string
  users: User[] = []

  @Output() addMatch = new EventEmitter<[string, string, string]>()

  constructor(protected userSrv: UserService) {}

  ngOnInit(): void {
    this.userSrv.getUsers().subscribe((users) => {
      this.users = users
    })
    this.userIdA = ''
    this.userIdB = ''
  }

  add() {
    this.addMatch.emit([this.date, this.userIdA, this.userIdB])
  }

  onDateChange(date: string) {
    this.date = date
  }

  reset() {
    this.userIdA = ''
    this.userIdB = ''
  }
}
