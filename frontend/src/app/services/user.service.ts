import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { User } from '../entities/user.entity'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/api/users`)
  }

  update(id: string, participating: boolean, organizer: boolean): Observable<User> {
    console.log(
      `${environment.apiUrl}/api/users/${id} Updating user ${id} with participating: ${participating}, organizer: ${organizer}`
    )
    return this.http.patch<User>(`${environment.apiUrl}/api/users/${id}`, {
      newParticipant: participating,
      newOrganizer: organizer
    })
  }
}
