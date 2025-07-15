import { Component } from '@angular/core'
import { Subject, ReplaySubject, switchMap, takeUntil } from 'rxjs'
import { RequestService } from '../../services/request.service'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html'
})
export class AdminDashboardComponent {
  protected destroyed$ = new Subject<void>()

  protected _requests$ = new ReplaySubject<void>()
  requests$ = this._requests$.pipe(
    switchMap(() => this.requestSrv.fetchPending()),
    takeUntil(this.destroyed$)
  )

  currentUser$ = this.authSrv.currentUser$

  constructor(
    protected requestSrv: RequestService,
    protected authSrv: AuthService
  ) {}

  addRequest(eventData: [string, string, number, number, string]) {
    this.requestSrv
      .add(eventData[0], eventData[1], eventData[2], eventData[3], eventData[4])
      .subscribe(() => {
        this._requests$.next()
      })
  }

  ngOnInit(): void {
    this._requests$.next()
  }

  ngOnDestroy(): void {
    this.destroyed$.next()
    this.destroyed$.complete()
  }

  onEditRequest(eventData: [string, string, string, number, number, string]) {
    this.requestSrv
      .update(eventData[0], eventData[1], eventData[2], eventData[3], eventData[4], eventData[5])
      .subscribe(() => {
        this._requests$.next()
      })
  }

  onDeleteRequest() {
    this._requests$.next()
  }
}
