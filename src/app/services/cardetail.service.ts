import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {CarDetailResponseModel} from '../models/modelResponses/cardetailResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CardetailService {

  apiUrl='https://localhost:44319/api/cars/GetCarDetails';
  constructor(private httpClient:HttpClient) { }

  getCarDetails():Observable<CarDetailResponseModel>{
    return this.httpClient.get<CarDetailResponseModel>(this.apiUrl);
  }
}
