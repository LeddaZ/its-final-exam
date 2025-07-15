import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { BehaviorSubject, map, tap } from 'rxjs'
import { JWTService } from './jwt.service'
import { environment } from '../../environments/environment'
import { User } from '../entities/user.entity'

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _currentUser$ = new BehaviorSubject<User | null | undefined>(undefined)

  currentUser$ = this._currentUser$.asObservable()

  constructor(
    private jwtSrv: JWTService,
    private http: HttpClient,
    private router: Router
  ) {
    this.fetchUserOnLoad()
  }

  isLoggedIn(): boolean {
    return this.jwtSrv.hasToken()
  }

  login(username: string, password: string) {
    return this.http
      .post<{
        user: User
        token: string
      }>(`${environment.apiUrl}/api/login`, { username, password })
      .pipe(
        tap((res) => {
          this.jwtSrv.setToken(res.token)
          this._currentUser$.next(res.user)
        }),
        map((res) => res.user)
      )
  }

  register(firstName: string, lastName: string, username: string, password: string) {
    return this.http.post(`${environment.apiUrl}/api/register`, {
      firstName,
      lastName,
      username,
      password,
      participating: false,
      organizer: false
    })
  }

  logout() {
    this.jwtSrv.removeToken()
    this._currentUser$.next(null)
    this.router.navigate(['/login'])
  }

  private fetchUserOnLoad() {
    if (!this.isLoggedIn()) {
      this._currentUser$.next(null)
      return
    }

    this.http.get<User>(`${environment.apiUrl}/api/users/me`).subscribe({
      next: (user) => {
        this._currentUser$.next(user)
      },
      error: () => {
        this.jwtSrv.removeToken()
        this._currentUser$.next(null)
      }
    })
  }

  public updateCurrentUserState(updatedUser: User): void {
    this._currentUser$.next(updatedUser)
  }
}
