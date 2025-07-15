import { ComponentFixture, TestBed } from '@angular/core/testing'

import { RequestModalComponent } from './request.component'

describe('RequestModalComponent', () => {
  let component: RequestModalComponent
  let fixture: ComponentFixture<RequestModalComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequestModalComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(RequestModalComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
