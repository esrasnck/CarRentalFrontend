import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';

import { Cardetail } from 'src/app/models/cardetail';
import { CarImage } from 'src/app/models/carImage';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CardetailService } from 'src/app/services/cardetail.service';
import { CarimageService } from 'src/app/services/carimage.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css'],
})
export class CardetailComponent implements OnInit {
  cardetails: Cardetail[] = [];
  carImage: CarImage[] = [];
  brands: Brand[] = [];
  colors: Color[] = [];

  cardetailFilter = '';
  brandFilter: number;
  colorFilter: number;
  dataLoaded = false;

  constructor(
    private cardetailService: CardetailService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private carImageService: CarimageService,
    private colorService: ColorService,
    private brandService: BrandService
  ) {}

  ngOnInit(): void {
    this.getAllBrands();
    this.getAllColors();

    this.activatedRoute.params.subscribe((params) => {
      if (params['colorId'] && params['brandId']) {
        this.getCarDetailByColorAndBrand(params['colorId'], params['brandId']);
        
      } else if (params['colorId']) {
        this.getCarDetailsByColor(params['colorId']);
      } else if (params['brandId']) {
        this.getCarDetailsByBrand(params['brandId']);
      } else {
        this.getCarDetails();
      }
    });
  }

  getCarDetails() {
    this.cardetailService.getCarDetails().subscribe((response) => {
      this.cardetails = response.data;
      this.dataLoaded = true;
    });
  }
  getAllBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  getAllColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  getCarDetailsByColor(colorId: number) {
    this.cardetailService
      .getCarDetailsByColor(colorId)
      .subscribe((response) => {
        this.cardetails = response.data;
        this.dataLoaded = true;
      });
  }

  getCarDetailsByBrand(brandId: number) {
    this.cardetailService
      .getCarDetailsByBrand(brandId)
      .subscribe((response) => {
        this.cardetails = response.data;
        this.dataLoaded = true;
      });
  }

  getCarImage(carId: number) {
    this.carImageService.getCarImage(carId).subscribe((reponse) => {
      this.carImage = reponse.data;
    });
  }
  getCarDetailByCarId(carId: number) {
    this.cardetailService.getCarDetailsByCarId(carId).subscribe((response) => {
      this.cardetails = response.data;
    });
  }

  getCarDetailByColorAndBrand(colorId: number, brandId: number) {
    this.cardetailService
      .getCarDetailByColorAndBrand(colorId, brandId)
      .subscribe((response) => {
        console.log(response)
        this.cardetails = response.data;
        this.dataLoaded=true;
      });
  }

  getSelectedBrand(brandId: Number) {
    if (this.brandFilter == brandId)
      return true;
    else
      return false;
  }
  
  getSelectedColor(colorId: Number) {
    if (this.colorFilter == colorId)
      return true;
    else
      return false;
  }

  
}
