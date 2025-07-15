import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'
import { AuthService } from '../services/auth.service'
import { map, take, filter } from 'rxjs/operators'

export const participantGuard: CanActivateFn = () => {
  const router = inject(Router)
  const authSrv = inject(AuthService)

  return authSrv.currentUser$.pipe(
    filter((userState) => userState !== undefined),
    take(1),
    map((user) => {
      if (user && user.participating) {
        return true
      } else {
        router.navigate(['/user-dashboard'])
        return false
      }
    })
  )
}
