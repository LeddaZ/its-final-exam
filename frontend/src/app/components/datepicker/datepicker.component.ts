import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core'
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap'
import { leadingZero } from '../../utils/leading-zero'

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.scss'
})
export class DatepickerComponent implements OnInit {
  model: NgbDateStruct
  minDate: NgbDateStruct
  today = inject(NgbCalendar).getToday()
  hasDueDate: boolean

  @Output() dateChange = new EventEmitter<string>()

  constructor() {
    const min = { year: this.today.year, month: this.today.month, day: this.today.day }
    this.model = min
    this.minDate = min
    this.hasDueDate = true
  }

  ngOnInit() {
    this.updateDate()
  }

  getDateString() {
    return `${this.model.year}-${leadingZero(this.model.month)}-${leadingZero(this.model.day)}`
  }

  updateDate() {
    if (this.hasDueDate) this.dateChange.emit(this.getDateString())
    else this.dateChange.emit(undefined)
  }
}
