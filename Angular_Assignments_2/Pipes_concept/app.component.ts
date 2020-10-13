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
   ngOnInit(): void {

   }
    
   
   age:number;
   birthdate:string
   num:string;

   Account_balance:string
   Limit:string;

   From:number;
  To:string;
  value:number;
  Result:any;
  code:string;

  currency=[
    {id:0,code:'GBO'},
    {id:1,code:'NZD'},
    {id:2,code:'EUR'},
    {id:3,code:'AUD'},
    {id:4,code:'INR'},
    {id:5,code:'CAD'},
    {id:6,code:'USD'},

  ]
}
