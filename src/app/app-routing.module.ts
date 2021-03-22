import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { CardetailimageComponent } from './components/cardetailimage/cardetailimage.component';
import { CustomerdetailComponent } from './components/customerdetail/customerdetail.component';
import { RentaldetailComponent } from './components/rentaldetail/rentaldetail.component';

const routes: Routes = [
  {path:"",component:CardetailComponent},
  {path:"cardetails",component:CardetailComponent},
  {path:"cardetails/brand/:brandId",component:CardetailComponent},
  {path:"cardetails/color/:colorId",component:CardetailComponent},
  {path:"custormerdetails",component:CustomerdetailComponent},
  {path:"rentaldetails",component:RentaldetailComponent},
  {path:"cardetails/cardetailimage/:carId",component:CardetailimageComponent},
  {path:"cardetails/color/:colorId/brand/:brandId",component:CardetailComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

