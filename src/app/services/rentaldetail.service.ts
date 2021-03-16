import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rentaldetail } from '../models/rentaldetail';


@Injectable({
  providedIn: 'root'
})
export class RentaldetailService {

  apiUrl='https://localhost:44319/api/rentals/GetRentalDetail';
  constructor(private httpClient:HttpClient) { }

  getRentalDetails():Observable<ListResponseModel<Rentaldetail>>{
    return this.httpClient.get<ListResponseModel<Rentaldetail>>(this.apiUrl);
  }
}
