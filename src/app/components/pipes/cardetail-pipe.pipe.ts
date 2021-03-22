import { Pipe, PipeTransform } from '@angular/core';
import { Cardetail } from 'src/app/models/cardetail';

@Pipe({
  name: 'cardetailPipe'
})
export class CardetailPipePipe implements PipeTransform {

  transform(value: Cardetail[], cardetailFilter: string): Cardetail[] {
    cardetailFilter = cardetailFilter?cardetailFilter.toLocaleLowerCase():""
    return cardetailFilter?value.filter((d:Cardetail)=>(
    d.carName.toLocaleLowerCase().indexOf(cardetailFilter)!==-1 || 
    d.brandName.toLocaleLowerCase().indexOf(cardetailFilter)!==-1 || 
    d.colorName.toLocaleLowerCase().indexOf(cardetailFilter)!==-1)||
    d.modelYear.toString().indexOf(cardetailFilter)!==-1 ||
    d.dailyPrice.toString().indexOf(cardetailFilter)!==-1 ||
    d.description.toLocaleLowerCase().indexOf(cardetailFilter)!==-1):value;
  }

}


