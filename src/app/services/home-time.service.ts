import {Injectable} from '@angular/core';
import {HomeTime} from "../models/home-time";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Order} from "../models/order";

const API_URL = 'http://localhost:8080/api/homeTimes/'
const API_URL_ORDER = 'http://localhost:8080/api/orders/'


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

  delete(id: number) {
    return this.httpClient.delete<HomeTime>(API_URL + `${id}`)
  }

  update(id: number, house: HomeTime): Observable<HomeTime> {
    return this.httpClient.put<HomeTime>(API_URL + `${id}`, house);
  }

  searchByHome(id: number): Observable<HomeTime[]> {
    return this.httpClient.get<HomeTime[]>(API_URL + `searchByHome/${id}`)
  }

  saveOrder(order: Order): Observable<Order> {
    console.log("gggggggggggg")
    return this.httpClient.post<Order>("http://localhost:8080/api/orders", order);
  }


}
