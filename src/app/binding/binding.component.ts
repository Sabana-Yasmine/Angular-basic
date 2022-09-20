import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
 
  title : String = "Angular session"
  product = {
    name : "laptop",
    price : 45000,
    Quantity : 10
  }

  btnstatus : Boolean = true
  constructor() { }

  event(){
    this.title = "Event Binding"
  }
  email = "sabana@gmail.com"
  username = ""
  inputstatus = true

  enable(){
    this.inputstatus = false
  }

  ngOnInit(): void {
    setTimeout(()=>{
      this.btnstatus = false
    },5000)
  }

}
