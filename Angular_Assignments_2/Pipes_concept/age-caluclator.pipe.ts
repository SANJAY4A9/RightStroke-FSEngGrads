import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ageCaluclator'
})
export class AgeCaluclatorPipe implements PipeTransform {

  transform(value: string, bir:string): string
  {
    if(bir!=undefined)
    {
      var   today= new Date();
      const b =new Date(bir)
      var diff_year=today.getFullYear()-b.getFullYear();
      var diff_month=today.getMonth()-b.getMonth();  
      if(diff_month<0 || (diff_month===0 && today.getDate()<b.getDate()))
      {
         diff_year--;
      }
      return `Your  age is ${diff_year}`
    }
  }
}
