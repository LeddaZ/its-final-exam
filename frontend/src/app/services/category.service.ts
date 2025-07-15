import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs'
import { Category } from '../entities/category.entity'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  fetch() {
    return this.http.get<any[]>(`${environment.apiUrl}/api/categories`)
  }

  add(description: string): Observable<Category> {
    return this.http.post<Category>(`${environment.apiUrl}/api/categories`, {
      description
    })
  }

  update(id: string, description: string): Observable<Category> {
    return this.http.patch<Category>(`${environment.apiUrl}/api/categories/${id}`, {
      description
    })
  }

  remove(id: string): Observable<Category> {
    return this.http.delete<Category>(`${environment.apiUrl}/api/categories/${id}`)
  }
}
