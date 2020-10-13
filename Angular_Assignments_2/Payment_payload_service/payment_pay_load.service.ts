import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PaymentPayLoadService {

  constructor(private httpclient:HttpClient) { }

  getCustomersList()
  {
    return this.httpclient.get('http://localhost:3000/Srinivas');
  }
  
}
