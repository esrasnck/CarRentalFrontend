import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerdetailComponent } from './components/customerdetail/customerdetail.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { RentaldetailComponent } from './components/rentaldetail/rentaldetail.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    BrandComponent,
    ColorComponent,
    CustomerdetailComponent,
    CardetailComponent,
    RentaldetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
