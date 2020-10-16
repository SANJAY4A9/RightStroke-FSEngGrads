import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showbalanceofcreditcardnumber'
})
export class ShowbalanceofcreditcardnumberPipe implements PipeTransform {

  transform(value:string): string 
  {
    console.log(value)
    if(value!=undefined)
    {

      if(value.length<19)
      {
        return ' '
      }
      else if(value==="8888-8888-8888-8888")
      {
        return 'you can withdraw 10,000 per day';
      }
      else{
        return 'You enterd a invalid credt card number'
      }

    }
  }
    
}
