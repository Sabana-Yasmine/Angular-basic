import { Component } from '@angular/core';
import { SampleService } from './service/sample.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  constructor(public sample : SampleService){
    
  }
  Login : any ='false'

  ngOInit()
  {
this.Login = localStorage.getItem('status')
console.log("LOGIN STATUS from APP",localStorage.getItem('status'))
  }
}
