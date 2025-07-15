import { Component, OnDestroy, OnInit } from '@angular/core'
import { ReplaySubject, Subject, switchMap, takeUntil } from 'rxjs'
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html'
})
export class ParticipantsComponent implements OnInit, OnDestroy {
  protected destroyed$ = new Subject<void>()

  protected _users$ = new ReplaySubject<void>()
  users$ = this._users$.pipe(
    switchMap(() => this.userSrv.getUsers()),
    takeUntil(this.destroyed$)
  )

  constructor(protected userSrv: UserService) {}

  ngOnInit(): void {
    this._users$.next()
  }

  ngOnDestroy(): void {
    this.destroyed$.next()
    this.destroyed$.complete()
  }
}
