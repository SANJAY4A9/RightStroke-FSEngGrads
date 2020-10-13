import { Component, OnInit} from '@angular/core';
import {Validator,FormBuilder, FormGroup, Validators ,ReactiveFormsModule} from '@angular/forms';
import {ForexserviceService} from './forexservice.service';
import {PaymentPayLoadService} from './payment-pay-load.service';
import {FormControl} from '@angular/forms';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  Users:any;
  UserName:string;
  Account_No_From:string;
  Account_No_To:string;
  amount:number=0;
  curr: string;

  
  
  Insuffiecient_Amount:boolean=false;
  Wrong_Id:boolean=false;
  Wrong_Acc_no:boolean=false;
  Everything_good:boolean=false;

  currency=[
    
    {id:0,code:'AUD',name:"Australian Dollar"},
    {id:1,code:'CAD',name:"Canadian Dollar"},
    {id:2,code:'EUR',name:"Euroes"},
    {id:3,code:'GBP',name:"British Pound"},
    {id:4,code:'INR',name:"Indian Rupee"},
    {id:5,code:'NZD',name:"Newzealand Dollar"},
    {id:6,code:'USD',name:"United states Dollar"}

  ]
  

  myform:FormGroup;

  
  

  constructor(private payment:PaymentPayLoadService,private formbuilder: FormBuilder)
  {
    this.myform=formbuilder.group
    ({
      UserName : new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
      Account_No_From : new FormControl('',[Validators.required,Validators.maxLength(11),Validators.minLength(11)]),
      Account_No_To : new FormControl('',[Validators.required,Validators.maxLength(11),Validators.minLength(11)]),
      amount : new FormControl('',[Validators.required]),
      curr : new FormControl('',[Validators.required])
    })
  }
   
  

  ngOnInit(): void
  {
     
     this.payment.getCustomersList().
     subscribe
     (
       data=>
       {
         this.Users=data;
       }
     ) 
     
  }
  assign()
  {
    console.log(this.myform.value.curr)
    for(let user of this.Users)
    {
      if(user.Customer_Id!=this.myform.value.UserName)
      {
        this.Wrong_Id=true;
      }
      else if(user.My_Acc_no!=this.myform.value.Account_No_From || user.Beneficiary_Acc_no!=this.myform.value.Account_No_To)
      {
        this.Wrong_Acc_no=true;
      }
      else if(user.Amount<this.myform.value.amount)
      {
        this.Insuffiecient_Amount=true;
      }
      else
      {
        this.Everything_good=true;
      }
    }

  }
  reset()
  {
    this.Wrong_Id=false;
    this.Wrong_Acc_no=false;
    this.Insuffiecient_Amount=false;
    this.Everything_good=false;    
  }
  
}
