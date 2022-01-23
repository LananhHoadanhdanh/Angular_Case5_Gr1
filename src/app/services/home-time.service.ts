import {Injectable} from '@angular/core';
import {HomeTime} from "../models/home-time";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

const API_URL = 'http://localhost:8080/api/homeTimes/'

@Injectable({
  providedIn: 'root'
})
export class HomeTimeService {

  constructor(private httpClient: HttpClient) {
  }

  listAllHomeTime(): Observable<HomeTime[]> {
    return this.httpClient.get<HomeTime[]>(API_URL);
  }

  getHome(id: any): Observable<HomeTime> {
    return this.httpClient.get<HomeTime>(API_URL + `getHomeTimes/${id}`);
  }

  save(house: HomeTime): Observable<HomeTime> {
    return this.httpClient.post<HomeTime>(API_URL, house);
  }
  delete(id:number){
    return this.httpClient.delete<HomeTime>(API_URL+`${id}`)
  }
  update(id:number,house:HomeTime):Observable<HomeTime>{
    return this.httpClient.put<HomeTime>(API_URL+`${id}`,house);
  }
}
