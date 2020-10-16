import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {ForexserviceService} from './forexservice.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { HttpClientModule} from '@angular/common/http';
import {OneconversionService} from './oneconversion.service';
import { AgeCaluclatorPipe } from './age-caluclator.pipe';
import { FormattingCreditCardNumberPipe } from './formatting-credit-card-number.pipe';
import { CurrencyconverterPipe } from './currencyconverter.pipe';
import { ShowbalancePipe } from './showbalance.pipe';
import { ShowbalanceofcreditcardnumberPipe } from './showbalanceofcreditcardnumber.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    AgeCaluclatorPipe,
    FormattingCreditCardNumberPipe,
    CurrencyconverterPipe,
    ShowbalancePipe,
    ShowbalanceofcreditcardnumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ForexserviceService,
              OneconversionService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
