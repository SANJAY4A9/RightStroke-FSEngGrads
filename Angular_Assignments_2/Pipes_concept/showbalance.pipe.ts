import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showbalance'
})
export class ShowbalancePipe implements PipeTransform {

  transform(value: string): string
  {
    if(value!=undefined)
    {

      if(value==='11111111111')
      {
        return 'Your balance is $20,000'
      }
    }
  }
    

}
