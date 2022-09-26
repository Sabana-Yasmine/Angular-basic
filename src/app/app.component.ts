import { Component, OnInit } from '@angular/core';
import { SampleService } from './service/sample.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-app';
  constructor(public sample : SampleService){
    
  }
  Login : any ='false'

  ngOnInit()
  {
this.Login = localStorage.getItem('status')
console.log("LOGIN STATUS from APP",localStorage.getItem('status'))
  }
}
