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
    return this.http.get<Request[]>(`${environment.apiUrl}/api/requests`)
  }

  fetchPending(): Observable<Request[]> {
    return this.http.get<Request[]>(`${environment.apiUrl}/api/requests/pending`)
  }

  fetchByCategory(categoryId: string): Observable<Request[]> {
    return this.http.get<Request[]>(`${environment.apiUrl}/api/requests/category/${categoryId}`)
  }

  add(
    category: string,
    item: string,
    quantity: number,
    unitPrice: number,
    reason: string
  ): Observable<Request> {
    return this.http.post<Request>(`${environment.apiUrl}/api/requests`, {
      category,
      item,
      quantity,
      unitPrice,
      reason
    })
  }

  update(
    id: string,
    category: string,
    item: string,
    quantity: number,
    unitPrice: number,
    reason: string
  ): Observable<Request> {
    return this.http.patch<Request>(`${environment.apiUrl}/api/requests/${id}`, {
      category,
      item,
      quantity,
      unitPrice,
      reason
    })
  }

  remove(id: string): Observable<Request> {
    return this.http.delete<Request>(`${environment.apiUrl}/api/requests/${id}`)
  }

  approve(id: string): Observable<Request> {
    return this.http.patch<Request>(`${environment.apiUrl}/api/requests/approve/${id}`, {})
  }

  reject(id: string): Observable<Request> {
    return this.http.patch<Request>(`${environment.apiUrl}/api/requests/reject/${id}`, {})
  }
}
