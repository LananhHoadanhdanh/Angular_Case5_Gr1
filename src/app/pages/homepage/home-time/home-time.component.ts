import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {HomeTime} from "../../../models/home-time";
import {HomeTimeService} from "../../../services/home-time.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../../services/authentication.service";

@Component({
  selector: 'app-home-time',
  templateUrl: './home-time.component.html',
  styleUrls: ['./home-time.component.css']
})
export class HomeTimeComponent implements OnInit {
  idU = localStorage.getItem("USERID");
  data?: HomeTime[]
  oneDay = 86400000;
  now = new Date();
  st?: string
  ed?: string
  time!: boolean;
  currentUser = localStorage.getItem("currentUser");
// @ts-ignore
  @Input() idH?: string;

  constructor(private homeTimeService: HomeTimeService, private activatedRoute: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {

  }


  orderHo() {
    // @ts-ignore
    this.homeTimeService.searchByHome(this.idH).subscribe(r => {
      this.data = r
    })
    // @ts-ignore
    this.time = setInterval(() => {
      this.orderHome()
      if (this.time) {
        // @ts-ignore
        clearInterval(this.time);
      }
    }, 200);
  }

  orderHome() {
    // @ts-ignore
    this.st = document.getElementById("monthStart").value;
    // @ts-ignore
    this.ed = document.getElementById("monthEnd").value;
    // @ts-ignore
    let strStartDate = new Date(this.st)
    // @ts-ignore
    let monthEnd = new Date(this.ed)
    let oneDay = 86400000;
    let now = new Date();
    console.log(now)
    console.log(strStartDate)
    console.log(monthEnd)
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
      console.log("dsdsdsds")
      console.log(this.idH)


      // @ts-ignore
      if (this.data?.length > 0) {
        console.log("aaaaaaaaaaaaaaaaaaaa")
        // console.log(strStartDate.getMilliseconds())
        let flag = true;
        for (let i = strStartDate.getTime(); i <= monthEnd.getTime(); i += oneDay) {
          let orderDate = new Date(i);
          console.log(orderDate + "xxxxxxxxxxxxxx");
          // @ts-ignore
          for (let j = 0; j < this.data.length; j++) {
            // @ts-ignore
            let bookingDate = (new Date(this.data[j].date));
            console.log(bookingDate)
            if ((orderDate.getDate() === bookingDate.getDate()) && (orderDate.getMonth() === bookingDate.getMonth()) && (orderDate.getFullYear() === bookingDate.getFullYear())) {
              flag = false;
              break;
            }
          }
        }
        if (!flag) {
          // let orderStartDate = new Date(this.data[0].date);
          // let orderEndDate = new Date(this.data[this.data.length - 1].date);
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
              id: this.idU
            },
            home: {
              id: this.idH
            }
          }
          console.log(order);

          // @ts-ignore
          this.homeTimeService.saveOrder(order).subscribe(() => {
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
            id: this.idU
          },
          home: {
            id: this.idH
          }
        }
        console.log(order);

        // @ts-ignore
        this.homeTimeService.saveOrder(order).subscribe(() => {
          alert("Thuê thoải mái đeee !!!")
        })
      }
      //   }
      // })
    }
  }
}
