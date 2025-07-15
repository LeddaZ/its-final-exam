import { ComponentFixture, TestBed } from '@angular/core/testing'

import { EditMatchModalComponent } from './edit-match-modal.component'

describe('EditMatchModalComponent', () => {
  let component: EditMatchModalComponent
  let fixture: ComponentFixture<EditMatchModalComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditMatchModalComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(EditMatchModalComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
