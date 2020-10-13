import { stringify } from '@angular/compiler/src/util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular_Assignment_1';
  selectedcity:number=0;

  public cities:any=[
    {
      id:1,
      name:'Madras',
      state:'TN'
    },
    {
      id:2,
      name:'Rajahmundry',
      state:'AP'
    },
    {
      id:3,
      name:'Kolkatta',
      state:'MP'
    }
  ];
  Str:String=''
  log(id:number)
  {
    for(var v of this.cities)
    {
      if(v.id===+id)
      {
          this.Str=`Your selected state is ${v.state}`;
      }
    }
   }
    
  }
