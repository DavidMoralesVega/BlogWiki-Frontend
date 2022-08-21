import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BaseComponent } from 'src/app/core/components/base.component';
import { APIZephyrus } from '../config/config.core';
import { Observable } from 'rxjs';
import { Pagination, Post } from '../models';

@Injectable({
  providedIn: 'root',
})
export class PostService extends BaseComponent {

  private APIZPost: string = APIZephyrus.Post;

  constructor(private httpClient: HttpClient) {
    super();
  }

  create(post: Post): Observable<any> {
    return this.httpClient.post<Post>(`${this.APIZPost}`, post);
  }

  findAll(pagination: Pagination): Observable<Post[]> {
    const { limit, offset } = pagination;
    return this.httpClient.get<any>(`${this.APIZPost}?limit=${limit}&offset=${offset}`);
  }

  findOne(Term: string): Observable<Post> {
    return this.httpClient.get<any>(`${this.APIZPost}/${Term}`);
  }

  update(IdPost: string, post: Post): Observable<any> {
    return this.httpClient.patch<any>(`${this.APIZPost}/${IdPost}`, post);
  }

  delete(IdPost: string): Observable<any> {
    return this.httpClient.delete<any>(`${this.APIZPost}/${IdPost}`);
  }

}
