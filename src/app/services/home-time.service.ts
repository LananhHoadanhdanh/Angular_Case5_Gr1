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

  orderHome(strStartDat: Date | string | number, monthEn: Date | string | number, data: HomeTime[],idU:number|string,idH:number|string) {


    let strStartDate = new Date(strStartDat)
    let monthEnd = new Date(monthEn)
    let oneDay = 86400000;
    let now = new Date();
    console.log(now)
    console.log(strStartDat)
    console.log(monthEn)
    // Check ngày tháng nhập vào
    if ((monthEnd < now) || (strStartDate < now)) {
      alert("Bạn đã chọn ngày nhỏ hơn ngày hiện tại, Xin mời nhập lại!")
    } else if (monthEnd <= strStartDate) {
      alert("Bạn đã chọn ngày nhận phòng nhỏ hơn hoặc bằng ngày trả phòng, Xin mời nhập lại!");
    } else if (monthEnd > strStartDate) {
      console.log("monthEnd > strStartDate");
      // Kiểm tra nhà đã được cho thuê trong 1 khoảng thời gian
      // $.ajax({
      //   type: "GET",
      //   url: "http://localhost:8080/api/homeTimes/searchByHome/" + idH,
      //   success: function (data) {
      // let data:HomeTime [];
      // @ts-ignore
      data = this.searchByHome(idH)
      console.log(data+"22222222222222222222222")
      if (data.length > 0) {
        console.log("aaaaaaaaaaaaaaaaaaaa")
        // console.log(strStartDate.getMilliseconds())
        let flag = true;
        for (let i = strStartDate.getTime(); i <= monthEnd.getTime(); i += oneDay) {
          let orderDate = new Date(i);
          console.log(orderDate + "xxxxxxxxxxxxxx");
          for (let j = 0; j < data.length; j++) {
            // @ts-ignore
            let bookingDate = (new Date(data[j].date));
            console.log(bookingDate)
            if ((orderDate.getDate() === bookingDate.getDate()) && (orderDate.getMonth() === bookingDate.getMonth()) && (orderDate.getFullYear() === bookingDate.getFullYear())) {
              flag = false;
              break;
            }
          }
        }
        if (!flag) {
          // let orderStartDate = new Date(data[0].date);
          // let orderEndDate = new Date(data[data.length - 1].date);
          alert("Nhà đang được cho thuê !! Xin mời nhập lại ! "
            // + orderStartDate.getDate() + " / " +
            // orderStartDate.getMonth() + " / " +
            // orderStartDate.getFullYear() + " đến ngày " +
            // orderEndDate.getDate() + " / " +
            // orderEndDate.getMonth() + " / " +
            // orderEndDate.getFullYear()
          );
        } else {
          console.log("ttttttttttttttttttttt")

          // Tạo order
          let order = {
            startDate: strStartDate,
            endDate: monthEnd,
            user: {
              id: idU
            },
            home: {
              id: idH
            }
          }
          console.log(order);

          // @ts-ignore
          this.saveOrder(order).subscribe(() => {
            alert("Thuê thoải mái đeee !!!")
          })

        }
      } else {
        // Tạo Order
        console.log("fdfdfdfdfdf")
        let order = {
          startDate: strStartDate,
          endDate: monthEnd,
          user: {
            id: idU
          },
          home: {
            id: idH
          }
        }
        console.log(order);

        // @ts-ignore
        this.saveOrder(order).subscribe(() => {
          alert("Thuê thoải mái đeee !!!")
        })
      }
      //   }
      // })
    }
  }

  // getDiffToNow(diff:Date|string|number):string{
  //
  // }

}
