import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BaseComponent } from 'src/app/core/components/base.component';
import { APIZephyrus } from '../config/config.core';
import { Observable } from 'rxjs';
import { Pagination, Category } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CategoryService extends BaseComponent {

  private APIZCategory: string = APIZephyrus.Category;

  constructor(private httpClient: HttpClient) {
    super();
  }

  create(category: any): Observable<any> {
    return this.httpClient.post<Category>(`${this.APIZCategory}`, category);
  }

  findAll(pagination: Pagination): Observable<Category[]> {
    const { limit, offset } = pagination;
    return this.httpClient.get<any>(`${this.APIZCategory}?limit=${limit}&offset=${offset}`);
  }

  findOne(Term: string): Observable<Category> {
    return this.httpClient.get<any>(`${this.APIZCategory}/${Term}`);
  }

  update(IdCategory: string | undefined, category: Category): Observable<any> {
    return this.httpClient.patch<any>(`${this.APIZCategory}/${IdCategory}`, category);
  }

  delete(IdCategory: string): Observable<any> {
    return this.httpClient.delete<any>(`${this.APIZCategory}/${IdCategory}`);
  }

}
