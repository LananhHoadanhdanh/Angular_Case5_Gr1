import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Home } from '../models/home';
import { Image } from '../models/image';
import {Observable} from "rxjs";
import { Category } from '../models/category';

const API_URL = 'http://localhost:8080/api/homes'
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  showListHome() {
    return this.http.get<Home[]>(API_URL )
  }

  show5Home() {
    return this.http.get<Home[]>(API_URL + '/find5HomeMostRated')
  }

  // @ts-ignore
  getListImg(idH) {
    return this.http.get<Image[]>(API_URL + '/findAllImg?idH=' + idH)
  }

  findById(id: string): Observable<Home> {
    return this.http.get<Home>(`${API_URL}/${id}`);
  }

  getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(API_URL + '/findAllCategory');
  }

  save(home: Home): Observable<Home> {
    return this.http.post<Home>(API_URL + '/createHome', home);
  }

  saveImg(image: Image): Observable<Image>{
    return this.http.post<Image>(API_URL + '/loadImage', image)
  }
}
