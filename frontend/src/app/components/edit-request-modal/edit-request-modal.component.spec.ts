import { ComponentFixture, TestBed } from '@angular/core/testing'

import { EditRequestModalComponent } from './edit-request-modal.component'

describe('EditRequestModalComponent', () => {
  let component: EditRequestModalComponent
  let fixture: ComponentFixture<EditRequestModalComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditRequestModalComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(EditRequestModalComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
