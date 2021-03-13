import { Component, OnInit } from '@angular/core';
import { Rentaldetail } from 'src/app/models/rentaldetail';
import { RentaldetailService } from 'src/app/services/rentaldetail.service';

@Component({
  selector: 'app-rentaldetail',
  templateUrl: './rentaldetail.component.html',
  styleUrls: ['./rentaldetail.component.css']
})
export class RentaldetailComponent implements OnInit {
rentaldetails:Rentaldetail[]=[]
dataLoaded=false;

  constructor(private rentaldetailService:RentaldetailService) { }

  ngOnInit(): void {
    this.getRentailDetails();
  }
  getRentailDetails(){
    this.rentaldetailService.getRentalDetails().subscribe((response)=>{
      this.rentaldetails=response.data;
      this.dataLoaded=true;
    })
  }
}
