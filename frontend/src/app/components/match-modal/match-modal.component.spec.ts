import { ComponentFixture, TestBed } from '@angular/core/testing'

import { MatchModalComponent } from './match.component'

describe('MatchModalComponent', () => {
  let component: MatchModalComponent
  let fixture: ComponentFixture<MatchModalComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatchModalComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(MatchModalComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
