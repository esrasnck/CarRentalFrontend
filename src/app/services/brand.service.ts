import { Injectable } from '@angular/core';
import {BrandResponseModel} from '../models/modelResponses/brandResponseModel';
import{HttpClient} from '@angular/common/http';
import{Observable}from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl='https://localhost:44319/api/brands/BrandList';
  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<BrandResponseModel>{
    return this.httpClient.get<BrandResponseModel>(this.apiUrl);
    
  }
}
