import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core'
import { Category } from '../../entities/category.entity'
import { CategoryService } from '../../services/category.service'
import { map, ReplaySubject, Subject, switchMap, takeUntil } from 'rxjs'
import { RequestService } from '../../services/request.service'

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html'
})
export class CategoryItemComponent implements OnInit, OnDestroy {
  protected destroyed$ = new Subject<void>()

  protected _requests$ = new ReplaySubject<void>()
  requests$ = this._requests$.pipe(
    switchMap(() => this.requestSrv.fetchByCategory(this.category.id)),
    takeUntil(this.destroyed$)
  )

  requestsCount$ = this.requests$.pipe(map((requests) => requests.length))

  @Input() category!: Category

  @Output() editCategory = new EventEmitter<[string, string]>()

  @Output() deleteCategoryEvent = new EventEmitter<void>()

  constructor(
    private categorySrv: CategoryService,
    private requestSrv: RequestService
  ) {}

  ngOnInit(): void {
    this._requests$.next()
  }

  ngOnDestroy(): void {
    this.destroyed$.next()
    this.destroyed$.complete()
  }

  onEditCategory(eventData: [string, string]) {
    this.editCategory.emit(eventData)
  }

  deleteCategory() {
    this.categorySrv.remove(this.category.id).subscribe(() => {
      this.deleteCategoryEvent.emit()
    })
  }
}
