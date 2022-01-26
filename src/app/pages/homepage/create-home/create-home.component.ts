import {Component, OnInit} from '@angular/core';
import {finalize, Observable} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {Home} from 'src/app/models/home';
import {FormControl, FormGroup} from "@angular/forms";
import {HomeService} from "../../../services/home.service";
import {Category} from 'src/app/models/category';
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-home',
  templateUrl: './create-home.component.html',
  styleUrls: ['./create-home.component.css']
})
export class CreateHomeComponent implements OnInit {
  title = 'addImage';
  selectedFile: File | null = null;
  fb: string | undefined;
  downloadURL!: Observable<string>;

  categories: Category[] = []
  homes: Home[] = []
  idU = localStorage.getItem("USERID");

  home?: Home;

  avatar?: string;
  bedImg?: string;
  livingImg?: string
  kitchenImg?: string;
  bathImg?: string

  houseForm = new FormGroup({
    name: new FormControl(''),
    bathroom: new FormControl(''),
    bedroom: new FormControl(''),
    address: new FormControl(''),
    description: new FormControl(''),
    categoryId: new FormControl(''),
    showerRoom: new FormControl(''),
    price: new FormControl(''),
    area: new FormControl(''),
  });

  constructor(private storage: AngularFireStorage,
              private homeService: HomeService,
              private router: Router) {
  }

  ngOnInit() {
    this.homeService.getAllCategory().subscribe(res => {
      this.categories = res
    })
  }

  // @ts-ignore
  onFileSelected(event, type: string) {
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              if (type == 'avatar') {
                this.avatar = url
              } else if (type == 'bedImg') {
                this.bedImg = url
              } else if (type == 'livingImg') {
                this.livingImg = url
              } else if (type == 'kitchenImg') {
                this.kitchenImg = url
              } else if (type == 'bathImg') {
                this.bathImg = url
              }
              // this.fb = url;
            }
            // console.log(this.fb);

          });
        })
      )
      .subscribe(url => {
        if (url && type == 'avatar') {
          // console.log(url);
        }
      });
  }

  saveAll() {
    this.saveHouse();
    this.homeService.showListHome().subscribe(list => {
      this.home = list[list?.length - 1]
    })
    this.addAllImage();
    alert('Thêm thành công!')
    this.router.navigate(['/homepage'])
  }

  saveHouse() {
    const house = {
      name: this.houseForm.value.name,
      address: this.houseForm.value.address,
      category: {
        id: this.houseForm.value.categoryId
      },
      bedroom: this.houseForm.value.bedroom,
      showerRoom: this.houseForm.value.showerRoom,
      description: this.houseForm.value.description,
      price: this.houseForm.value.price,
      bathroom: this.houseForm.value.bathroom,
      area: this.houseForm.value.area,
      user: {
        id: this.idU
      },
      statusHome: {
        id: '1'
      }
    }
    // @ts-ignore
    this.homeService.save(house).subscribe(() => {
      console.log("Thêm nhà thành công!")
    })
  }

  // @ts-ignore
  saveImage(links, idH) {
    const img = {
      home: {
        id: idH
      },
      links: links,
      status: '1'
    }
    this.homeService.saveImg(img).subscribe(() => {
      console.log("Thêm ảnh thành công")
    })
  }

  addAllImage() {
    this.homeService.showListHome().subscribe(list => {
      this.home = list[list?.length - 1]
      console.log("Nhà mới nhất là")
      console.log(this.home)
      this.saveImage(this.avatar, this.home.id);
      this.saveImage(this.bedImg, this.home.id);
      this.saveImage(this.livingImg, this.home.id);
      this.saveImage(this.kitchenImg, this.home.id);
      this.saveImage(this.bathImg, this.home.id);
    })
  }

  back() {
    this.router.navigate(['/homepage'])
  }

}
