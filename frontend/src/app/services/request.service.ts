import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment'
import { Request } from '../entities/request.entity'

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(private http: HttpClient) {}

  fetch() {
    return this.http.get<any[]>(`${environment.apiUrl}/api/requests`)
  }

  add(date: string, playerA: string, playerB: string): Observable<Request> {
    return this.http.post<Request>(`${environment.apiUrl}/api/requests`, {
      date,
      playerA,
      playerB,
      scoreA: 0,
      scoreB: 0,
      played: false
    })
  }

  update(
    id: string,
    date: string,
    playerA: number,
    playerB: number,
    scoreA: string
  ): Observable<Request> {
    return this.http.patch<Request>(`${environment.apiUrl}/api/requests/${id}`, {
      date,
      playerA,
      playerB,
      scoreA
    })
  }
}
