import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerDetail } from '../models/customerdetail';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})

export class CustomerDetailService {

  apiUrl='https://localhost:44319/api/customers/GetCustomerDetail';


  constructor(private httpClient:HttpClient) { }

  getCustomerDetail():Observable<ListResponseModel<CustomerDetail>>{
    return this.httpClient.get<ListResponseModel<CustomerDetail>>(this.apiUrl);
  }
}
