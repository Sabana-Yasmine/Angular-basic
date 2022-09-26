import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("LOGIN STATUS from LOGIN",localStorage.getItem('status'))
  }

  login(){
   localStorage.setItem('status',"true");
   window.location.reload()

   
  }

}
