import { Component, OnDestroy, OnInit } from '@angular/core'
import { ReplaySubject, Subject, switchMap, takeUntil } from 'rxjs'
import { CategoryService } from '../../services/category.service'

@Component({
  selector: 'app-manage-categories',
  templateUrl: './manage-categories.component.html'
})
export class ManageCategoriesComponent implements OnInit, OnDestroy {
  protected destroyed$ = new Subject<void>()

  protected _categories$ = new ReplaySubject<void>()
  categories$ = this._categories$.pipe(
    switchMap(() => this.categorySrv.fetch()),
    takeUntil(this.destroyed$)
  )

  constructor(protected categorySrv: CategoryService) {}

  addCategory(eventData: [string]) {
    this.categorySrv.add(eventData[0]).subscribe(() => {
      this._categories$.next()
    })
  }

  ngOnInit(): void {
    this._categories$.next()
  }

  ngOnDestroy(): void {
    this.destroyed$.next()
    this.destroyed$.complete()
  }

  onEditCategory(eventData: [string, string]) {
    this.categorySrv.update(eventData[0], eventData[1]).subscribe(() => {
      this._categories$.next()
    })
  }

  onDeleteCategory() {
    this._categories$.next()
  }
}
