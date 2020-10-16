import { Pipe, PipeTransform } from '@angular/core';
import { from } from 'rxjs';

@Pipe({
  name: 'currencyconverter'
})
export class CurrencyconverterPipe implements PipeTransform {

  transform(value:number,From:string,To:number): number 
  {
    if(From!=undefined && To!=undefined && value!=undefined)
    {
      var currency_codes=[
        {AUD:1,CAD:0.96,EUR:0.61,GBP:0.56,INR:52.62,NZD:1.08,USD:0.72},      //AUD-0(Id) to {AUD,CAD,EUR,GBP,INR,NZD,USD}
        {AUD:1.05,CAD:1,EUR:0.64,GBP:0.59,INR:55.06,NZD:1.13,USD:0.75},      //CAD-1(Id) to {AUD,CAD,EUR,GBP,INR,NZD,USD}
        {AUD:1.63,CAD:1.56,EUR:1,GBP:0.91,INR:85.96,NZD:1.77,USD:1.17},      //EUR-2(Id) to {AUD,CAD,EUR,GBP,INR,NZD,USD}
        {AUD:1.79,CAD:1.71,EUR:1.09,GBP:1,INR:94.02,NZD:1.94,USD:1.29},      //GBP-3(Id) to {AUD,CAD,EUR,GBP,INR,NZD,USD}
        {AUD:0.019,CAD:0.018,EUR:0.012,GBP:0.011,INR:1,NZD:0.021,USD:0.014}, //INR-4(Id) to {AUD,CAD,EUR,GBP,INR,NZD,USD}
        {AUD:0.92,CAD:0.88,EUR:0.57,GBP:0.52,INR:48.56,NZD:1,USD:0.66},      //NZD-5(Id) to {AUD,CAD,EUR,GBP,INR,NZD,USD} 
        {AUD:1.39,CAD:1.333,EUR:0.85,GBP:0.78,INR:73.32,NZD:1.51,USD:1}];    //USD-6(Id) to {AUD,CAD,EUR,GBP,INR,NZD,USD}
      
        var res=currency_codes[From][To]*value;
        return res
  
    }
  }


}
