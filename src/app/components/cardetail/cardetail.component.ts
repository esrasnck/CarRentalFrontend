import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cardetail } from 'src/app/models/cardetail';
import { CarImage } from 'src/app/models/carImage';
import { CardetailService } from 'src/app/services/cardetail.service';
import { CarimageService } from 'src/app/services/carimage.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {

  cardetails:Cardetail[]=[];
  carImage:CarImage[]=[];
  dataLoaded=false;

  constructor(private cardetailService:CardetailService,private activatedRoute:ActivatedRoute,private router:Router,private carImageService:CarimageService) { }

  ngOnInit(): void {

   this.activatedRoute.params.subscribe(params=>{
     if(params["colorId"]){
      this.getCarDetailsByColor(params["colorId"])
     }
     else if(params["brandId"]){
      this.getCarDetailsByBrand(params["brandId"])
     }
     else{
      this.getCarDetails()
    }
   })
    
  }

  getCarDetails(){
    this.cardetailService.getCarDetails().subscribe(response=>{
      this.cardetails =response.data;
      this.dataLoaded =true;
    })
  }

  getCarDetailsByColor(colorId:number){
    this.cardetailService.getCarDetailsByColor(colorId).subscribe(response=>{
      this.cardetails =response.data;
      this.dataLoaded =true;
    })
  }

  getCarDetailsByBrand(brandId:number){
    this.cardetailService.getCarDetailsByBrand(brandId).subscribe((response)=>{
      this.cardetails =response.data;
      this.dataLoaded =true;
    })
  }
  
getCarImage(carId:number){
  this.carImageService.getCarImage(carId).subscribe(reponse=>{
    this.carImage =reponse.data;
  })
}
getCarDetailByCarId(carId:number){
  this.cardetailService.getCarDetailsByCarId(carId).subscribe(response=>{
    this.cardetails=response.data;
  })

}

}
