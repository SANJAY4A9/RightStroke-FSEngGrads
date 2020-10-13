import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'Angular_Assignment_1';
  k:number=0
  countries=[
    {Id:1,Country:"China"},
    {Id:2,Country:"India"},
    {Id:3,Country:"US"},

]
      
}
