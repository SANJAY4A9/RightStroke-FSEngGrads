import { asNativeElements, Component, OnInit} from '@angular/core';
import {Validator,FormBuilder, FormGroup, Validators ,ReactiveFormsModule} from '@angular/forms';
import {ForexserviceService} from './forexservice.service';
import {PaymentPayLoadService} from './payment-pay-load.service';
import { FraudulentPaymentService } from './fraudulent-payment.service';
import {FormControl} from '@angular/forms';
import {NgForm} from '@angular/forms';

import {OneconversionService} from './oneconversion.service';

import {Pipe,PipeTransform} from '@angular/core'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
   countryList:any;
   customerTypes:any;
   creditcardTypes:any;
   currency:any;
   constructor(private n:ForexserviceService){}
   ngOnInit(): void 
   {
        this.n.getcountry().
        toPromise().then
        (
        
          data1=>
          {
            this.countryList=data1;
          }
        )

        this.n.getcustomer().
        toPromise().then
        (
           data2=>
           {
             this.customerTypes=data2;
           }
        )

        this.n.getcreditcard().
        toPromise().then
        (
          data3=>
          {
            this.creditcardTypes=data3;
          }
        )

        this.n.getcurrency().
        toPromise().then
        (
          data4=>
          {
            this.currency=data4;
          }
        )
   }
    
  cities: Array<any>;
  changeCountry(count) {
    this.cities = this.countryList.find(con => con.id == count).cities;
  }
}
