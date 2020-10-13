import { asNativeElements, Component, OnInit} from '@angular/core';
import {Validator,FormBuilder, FormGroup, Validators ,ReactiveFormsModule} from '@angular/forms';
import {ForexserviceService} from './forexservice.service';
import {PaymentPayLoadService} from './payment-pay-load.service';
import { FraudulentPaymentService } from './fraudulent-payment.service';
import {FormControl} from '@angular/forms';
import {NgForm} from '@angular/forms';

import {OneconversionService} from './oneconversion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  From1:number;
  To1:string;
  val1:number;

  From2:string;
  To2:string;
  val2:number

  Result:any;

  Display1:boolean=false;
  Display2:boolean=true;

  values1=
  [
    {id:0,code:'mts',name:'Meters'},
    {id:1,code:'kms',name:'Kilometers'},
    {id:2,code:'cms',name:'Centimeters'},
    {id:3,code:'millims',name:'Millimeter'},
    {id:4,code:'microms',name:'Micrometers'},
    {id:5,code:'nanms',name:'Nanometers'},
    {id:6,code:'mile',name:'Mile'},
    {id:7,code:'yard',name:'Yard'},
    {id:8,code:'foot',name:'Foot'},
    {id:9,code:'Inch',name:'Inch'}
  ]

  values2=
  [
    {id:'Farenheit',code:'Farenheit',name:'Farenheit'},
    {id:'Celsius',code:'Celsius',name:'Celsius'},
    {id:'Kelvin',code:'Kelvin',name:'Kelvin'}
  ]

  constructor(private n:OneconversionService){}
  ngOnInit(): void
  {
     this.n.value_to_be_send_to_components.
     subscribe
     (
       data=>{
                this.Result=data;
             }
     )
     if(this.Result<1 && this.Result>0)
     {
        this.Result=this.Result.toExponential();
     }
  }
  ans1()
  {
   this.n.caluclate2(this.From1,this.To1,this.val1);
  }

  ans2()
  {
    this.n.caluclate1(this.From2,this.To2,this.val2);
  }

  D1()
  {
    this.Display1=false;
    this.Display2=true;
    this.Result=null
  }
  D2()
  {
    this.Display1=true;
    this.Display2=false;
    this.Result=null;
  }
    
}
