import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HomeTime} from "../models/home-time";
import {HttpClient} from "@angular/common/http";
import {Order} from "../models/order";
const API_URL = 'http://localhost:8080/api/orders/'

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private httpClient:HttpClient) { }
  findAllOrder(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(API_URL);
  }
  saveOrder(order:Order):Observable<Order>{
    return this.httpClient.post(API_URL,order);
  }
}
