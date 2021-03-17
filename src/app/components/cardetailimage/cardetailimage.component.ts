import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cardetail } from 'src/app/models/cardetail';
import { CarImage } from 'src/app/models/carImage';
import { CardetailService } from 'src/app/services/cardetail.service';
import { CarimageService } from 'src/app/services/carimage.service';

@Component({
  selector: 'app-cardetailimage',
  templateUrl: './cardetailimage.component.html',
  styleUrls: ['./cardetailimage.component.css']
})
export class CardetailimageComponent implements OnInit {

  carImage:CarImage[]=[];
  cardetails:Cardetail;
  imagePath="https://localhost:44319";

  constructor(private carImageService:CarimageService, private cardetailService:CardetailService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

   this.activatedRoute.params.subscribe(params=>{
    if(params["carId"]){
     this.getCarDetailByCarId(params["carId"]),
     this.getCarImage(params["carId"])
    }
   
  })
  }

  getCarImage(carId:number){
    this.carImageService.getCarImage(carId).subscribe(reponse=>{
      this.carImage =reponse.data;
    })
  }

  getCarDetailByCarId(carId:number){
    this.cardetailService.getCarDetailsByCarId(carId).subscribe(response=>{
      this.cardetails=response.data[0];
    })
  
  }

  getImagePath(image:string){
   return this.imagePath + image;
  }
}
