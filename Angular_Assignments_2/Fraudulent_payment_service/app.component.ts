import { Component, OnInit} from '@angular/core';
import {Validator,FormBuilder, FormGroup, Validators ,ReactiveFormsModule} from '@angular/forms';
import {ForexserviceService} from './forexservice.service';
import {PaymentPayLoadService} from './payment-pay-load.service';
import { FraudulentPaymentService } from './fraudulent-payment.service';
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
  BannedCurrencies:Object;
  BannedAccountsList:Object;

  UserName:string;
  Account_No_From:String;
  Account_No_To:String;
  amount:number=0;
  curr: string;

  
  
  Insuffiecient_Amount:boolean=false;
  Wrong_Id:boolean=false;
  Wrong_Acc_no:boolean=false;
  Everything_good:boolean=false;
  banned_ac:boolean=false;
  banned_curr:boolean=false;
  exceedAmount:boolean=false;


  currency=[
    
    {id:0,code:'AUD',name:"Australian Dollar"},
    {id:1,code:'CAD',name:"Canadian Dollar"},
    {id:2,code:'EUR',name:"Euroes"},
    {id:3,code:'GBP',name:"British Pound"},
    {id:4,code:'INR',name:"Indian Rupee"},
    {id:5,code:'NZD',name:"Newzealand Dollar"},
    {id:6,code:'USD',name:"United states Dollar"},
    {id:7,code:'HCC',name:"UCD dollar"},
    {id:8,code:'MCC',name:"ICD Rupee"},
    {id:9,code:'LID',name:'UIB Pound'}
  ]
  

  myform:FormGroup;

  banned_ac_msg="The account is blocked "+new Date();
  banned_curr_msg="The currency got banned please choose another one "+new Date();
  Insuffiecient_msg="In your account you have insufficient amount "+ new Date();
  wrong_Id_msg="You have enterd wrong user name "+new Date();
  wrong_Acc_msg=" You have entered a wrong account number "+new Date()
  success_msg="Payment is done successfully "+new Date()
  ExceedAmount_msg="Maiximum you can send only 10000 per transaction "+new Date()

 
  constructor(private fraudpayments:FraudulentPaymentService,private formbuilder: FormBuilder)
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
     
     this.fraudpayments.getCustomersList().
     subscribe
     (
       data1=>
       {
         this.Users=data1;
       }
     ) 

     this.fraudpayments.getBannedCurrencyList().
     subscribe
     (
       data2=>
       {
          this.BannedCurrencies=data2;
       }
     )

     this.fraudpayments.getBannedAccountList().
     subscribe
     (
       data3=>
       {
          this.BannedAccountsList=data3;
       }
     )
  }
 
  
   
  Banned_Currency(Bcur):boolean
  {

    let val2=Object.values(Bcur);
    for(let v of val2)
    {
       if(v===this.myform.value.curr)
       {
         return true;
       }
    }
  }

  Banned_Accounts(BAco):boolean
  {

    let val1=Object.values(BAco);
    for(let v of val1)
    {
       if(v===this.myform.value.Account_No_From || v===this.myform.value.Account_No_To)
       {
          return true 
       }
    }
    

  }

  assign()
  {
    if(this.Banned_Currency(this.BannedCurrencies))
    {
         this.banned_curr=true;
    }

    else if(this.Banned_Accounts(this.BannedAccountsList))
    {
      this.banned_ac=true;
    }
    else
    {
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
         else if(this.myform.value.amount>10000)
         {
           this.exceedAmount=true;
         }
         else
         {
                this.Everything_good=true;
         }
      }

    }
  }

  reset()
  {
    this.Wrong_Id=false;
    this.Wrong_Acc_no=false;
    this.Insuffiecient_Amount=false;
    this.Everything_good=false; 
    this.banned_ac=false;
    this.banned_curr=false;
    this.exceedAmount=false;   
  }
  
}
