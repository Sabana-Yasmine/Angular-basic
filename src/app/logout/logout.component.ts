import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("LOGIN STATUS from LOGOUT",localStorage.getItem('status'))
  }

  logout(){
    localStorage.setItem('status',"false");
    window.location.reload()
  }
  
}

