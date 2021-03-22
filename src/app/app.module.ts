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
import { CardetailimageComponent } from './components/cardetailimage/cardetailimage.component';
import { ColorPipePipe } from './components/pipes/color-pipe.pipe';
import { BrandPipePipe } from './components/pipes/brand-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { CardetailPipePipe } from './components/pipes/cardetail-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    BrandComponent,
    ColorComponent,
    CustomerdetailComponent,
    CardetailComponent,
    RentaldetailComponent,
    CardetailimageComponent,
    ColorPipePipe,
    BrandPipePipe,
    CardetailPipePipe
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
