import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForexserviceService 
{

    constructor(private httpclient:HttpClient){}
    
    getcountry()
    {
      return this.httpclient.get('http://localhost:3000/countryList')

    }

    getcustomer()
    {
      return this.httpclient.get('http://localhost:3000/Customer_types')
    }

    getcreditcard()
    {
      return this.httpclient.get('http://localhost:3000/Crdeitcard_types')
    
    }

    getcurrency()
    {
      return this.httpclient.get('http://localhost:3000/currency')
    }
}
