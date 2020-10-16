import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formattingCreditCardNumber'
})
export class FormattingCreditCardNumberPipe implements PipeTransform {

  transform(value: string,n:string): string
  {
    if(n!=undefined)
    {
       var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
       var matches = value.match(/\d{4,16}/g);
       var match = matches && matches[0] || ''
       var parts = []
       for (var i=0, len=match.length; i<len; i+=4) {
            parts.push(match.substring(i, i+4))
       }
       if (parts.length)
        {
           return   `Formatted credit card number ${parts.join('  ')}`
        }     
       else 
      {
           return `Formateed credit card number ${value}`;
      }
    }
   }

}
