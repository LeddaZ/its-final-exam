import { TestBed } from '@angular/core/testing'
import { CanActivateFn } from '@angular/router'

import { participantGuard } from './participant.guard'

describe('participantGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => participantGuard(...guardParameters))

  beforeEach(() => {
    TestBed.configureTestingModule({})
  })

  it('should be created', () => {
    expect(executeGuard).toBeTruthy()
  })
})
