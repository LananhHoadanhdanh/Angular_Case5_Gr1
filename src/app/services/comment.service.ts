import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Comment } from '../models/comment';

const API_URL = 'http://localhost:8080/api/comments'
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  // @ts-ignore
  getAllByHome(idH) {
    return this.http.get<Comment[]>(API_URL + '?idH=' + idH)
  }
}
