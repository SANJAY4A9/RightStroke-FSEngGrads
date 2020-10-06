import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularAssignment1';
  name:String="Sanjay";
  Firstname:String="";
  url='https://www.bing.com/images/search?view=detailV2&ccid=CKM4AmO1&id=EB4C6BE3B71CACD199EED8248047CC1359909A3E&thid=OIP.CKM4AmO1WkO8qXavkRssfwHaFh&mediaurl=https%3a%2f%2fi.pinimg.com%2foriginals%2fa9%2f2d%2f89%2fa92d8913b924495f992a5fa791b8d59c.jpg&exph=989&expw=1326&q=sanjay+name+images&simid=607990644374112596&ck=5844DC61E62C966164488DDFE0946239&selectedIndex=48&FORM=IRPRST'

  read(username:String){
      alert(`Dear ${username}, you have clicked the submit button`);
  }
}
