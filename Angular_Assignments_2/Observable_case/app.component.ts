import { AfterViewInit, asNativeElements, Component, OnInit, ViewChild} from '@angular/core';
import {Validator,FormBuilder, FormGroup, Validators ,ReactiveFormsModule} from '@angular/forms';
import {ForexserviceService} from './forexservice.service';
import {PaymentPayLoadService} from './payment-pay-load.service';
import { FraudulentPaymentService } from './fraudulent-payment.service';
import {FormControl} from '@angular/forms';
import {NgForm} from '@angular/forms';

import {OneconversionService} from './oneconversion.service';

import {Pipe,PipeTransform} from '@angular/core'

import {filter,map,debounceTime,distinctUntilChanged, switchMap} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Currency } from './Currency';
import { search } from './search.interface';
import { documents} from './Docuements';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit
{

  
  currencies: any;
  SearchResults:search;
  count:number;
  doc:any

  constructor(private dataService: ForexserviceService) { }

  public curr :Observable<Currency[]>=null;
  public docc :Observable<documents[]>=null;

  ngOnInit() 
  {
    this.dataService.getcurrencies().pipe
    (
    map((data:Currency[])=>
    {
      let crr:Currency[]=[]
      data.map(d=>
        {
         if(d.name!='AAA' && d.name!='HHH') { crr.push(d) };
        }
      )
      return crr;
    }))
    .subscribe
    (
      (res:Currency[])=>
       {
         this.currencies=res;
       }
    )

    this.dataService.getdocuements().pipe
    (
    map((data:documents[])=>
    {
      let crr:documents[]=[]
      data.map(d=>
        {
         if(d.status!='Partially submitted' && d.status!='Incorrect') { crr.push(d) };
        }
      )
      return crr;
    }))
    .subscribe
    (
      (res:documents[])=>
       {
         this.doc=res;
       }
    )



    
   }

  @ViewChild('searchForm') searchForm:NgForm

  ngAfterViewInit():void
  {


      const formvalue=this.searchForm.valueChanges;  

      formvalue.
      pipe(filter(()=>this.searchForm.valid),map(data=>data.searchTerm),debounceTime(500),
              distinctUntilChanged(),switchMap(data=>this.dataService.getsearches(data))).
      subscribe(res=>{this.SearchResults=res; this.count=Object.keys(res).length})
  }

}
