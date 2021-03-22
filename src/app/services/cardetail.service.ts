import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cardetail } from '../models/cardetail';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CardetailService {

  apiUrl='https://localhost:44319/api/';

  constructor(private httpClient:HttpClient) { }

  getCarDetails():Observable<ListResponseModel<Cardetail>>{
    let newPath= this.apiUrl + "cars/GetCarDetails"
    return this.httpClient.get<ListResponseModel<Cardetail>>(newPath);
  }

  getCarDetailsByCarId(carId:number):Observable<ListResponseModel<Cardetail>>{
    let newPath = this.apiUrl +"cars/GetCarDetailByCarId?carId=" + carId
    return this.httpClient.get<ListResponseModel<Cardetail>>(newPath);
  }

  getCarDetailsByBrand(brandId:number):Observable<ListResponseModel<Cardetail>>{
    let newPath = this.apiUrl +"cars/GetCarDetailListByBrandId?brandId="+ brandId
    return this.httpClient.get<ListResponseModel<Cardetail>>(newPath);
  }
  getCarDetailsByColor(colorId:number):Observable<ListResponseModel<Cardetail>>{
    let newPath = this.apiUrl + "cars/GetCarDetailListByColorId?colorId="+ colorId
    return this.httpClient.get<ListResponseModel<Cardetail>>(newPath);
  }
  
  getCarDetailByColorAndBrand(colorId:number, brandId:number):Observable<ListResponseModel<Cardetail>>{
    let newPath=this.apiUrl + "cars/GetCarDetailsByColorAndByBrand?colorId="+colorId+ "&brandId=" +brandId
    return this.httpClient.get<ListResponseModel<Cardetail>>(newPath);
  }

}
