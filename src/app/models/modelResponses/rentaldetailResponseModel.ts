import { Rentaldetail } from "../rentaldetail";
import { ResponseModel } from "../responseModel";

export interface RentalDetailModel extends ResponseModel{
    data:Rentaldetail[]
}