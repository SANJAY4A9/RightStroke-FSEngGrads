import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class OneconversionService {

  private sendingcaluclateresult=new Subject<number>();
  value_to_be_send_to_components=this.sendingcaluclateresult.asObservable()

  conversion=
  [
    {mts:1,kms:0.001,cms:100,millims:1000,microms:10**6,nanms:10**9,mile:6.21371*(10**-4),yard:1.09361,foot:3.28084,Inch:39.3701},                      
    {mts:1000,kms:1,cms:10**5,millims:10**6,microms:10**9,nanms:10**12,mile:6.21371*(10**-1),yard:1093.61,foot:3280.84,Inch:39370.1},                        
    {mts:0.01,kms:10**-5,cms:1,millims:10,microms:10**4,nanms:10**7,mile:6.213*(10**-6),yard:0.0109361,foot:0.0328084,Inch:0.393701},                            
    {mts:0.001,kms:10**-6,cms:0.1,millims:1,microms:1000,nanms:10**6,mile:6.213*(10**-7),yard:0.00109361,foot:0.00328089,Inch:0.0393701},
    {mts:10**-6,kms:10**-9,cms:10**-4,millims:0.001,microms:1,nanms:1000,mile:6.2137*(10**-10),yard:1.0936*(10**-6),foot:3.280*(10**-6),Inch:3.937*(10**-5)},
    {mts:10**-9,kms:10**-12,cms:10**-7,millims:10**-6,microms:0.001,nanms:1,mile:6.2137*(10**-13),yard:1.0936*(10**-9),foot:3.2808*(10**-9),Inch:3.937*(10**-8)},
    {mts:1609.34,kms:1.6093,cms:160934,millims:1.609*(10**6),microms:1.609*(10**9),nanms:1.609*(10**12),mile:1,yard:1760,foot:5280,Inch:63360},
    {mts:0.9144,kms:0.0009144,cms:91.44,millims:914.4,microms:914400,nanms:9.144*(10**8),mile:5.6812*(10**-4),yard:1,foot:3,Inch:36},
    {mts:0.3048,kms:3.048*(10**-4),cms:30.48,millims:304.8,microms:304800,nanms:3.048*(10**8),mile:1.893*(10**-4),yard:0.333,foot:1,Inch:12},
    {mts:0.0254,kms:2.54*(10**-5),cms:2.54,millims:25.4,microms:25400,nanms:2.54*(10**7),mile:1.573*(10**-5),yard:0.0277,foot:0.00833,Inch:1}
  ]
  caluclate1(from:string,to:string,value:number)
  {
    if(to==='Celsius' && from==='Farenheit')
    {
      this.sendingcaluclateresult.next(this.F_to_c(value))
    }
    else if(to==='Farenheit' &&  from==='Celsius')
    {
      this.sendingcaluclateresult.next(this.C_to_f(value))
    }
    else if(to==='Kelvin' && from==='Celsius')
    {
      this.sendingcaluclateresult.next(this.C_to_k(value))
    }
    else if(to==='Celsius' && from==='Kelvin')
    {
      this.sendingcaluclateresult.next(this.K_to_c(value))
    }
    else if(to==='Kelvin' && from==='Farenheit')
    {
      this.sendingcaluclateresult.next(this.F_to_k(value))
    }
    else if(to==='Farenheit' && from==='Kelvin')
    {
      this.sendingcaluclateresult.next(this.K_to_f(value))
    }
    else
    {
      this.sendingcaluclateresult.next(value)
    }

  }

  F_to_c(f:number)
  {
      return (f-32)/1.8;
  }
  C_to_f(c:number)
  {
      return (c*1.8)+32;
  }
  C_to_k(f:number)
  {
    return f+273.15;
  }
  K_to_c(f:number)
  {
    return f-273.15;
  }
  F_to_k(f:number)
  {
    return ((f-32)*(5/9)+273.15);
  }
  K_to_f(f:number)
  {
    return ((f-273.15)*(9/5)+32)
  }

  caluclate2(from:number,to:string,value:number)
  {
    
    this.sendingcaluclateresult.next(this.conversion[from][to]*value)
  
  }
}
