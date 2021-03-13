import { CustomerDetail } from "../customerdetail";
import { ResponseModel } from "../responseModel";

export interface CustomerDetailResponseModel extends ResponseModel{
    data:CustomerDetail[]
}