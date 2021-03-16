import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cardetail } from 'src/app/models/cardetail';
import { CardetailService } from 'src/app/services/cardetail.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {

  cardetails:Cardetail[]=[];
  dataLoaded=false;

  constructor(private cardetailService:CardetailService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    // console.log(this.route.snapshot.params["brandId"] + " " +this.route.snapshot.params["colorId"])

    // if 'le eğer brandID boşa sunu getir vs. eğer brandId boşa 
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
}
