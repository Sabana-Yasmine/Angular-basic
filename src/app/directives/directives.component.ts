import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  title = 'directive demo';
  
  isAdmin = true;
   
  student =[
    {
      name : "Sabana",
      class : 10,
      rollno : 31,
      result : "pass"
    },
    {
      name : "Yasmine",
      class : 10,
      rollno : 32,
      result : "fail"
    },
    {
      name : "Mizla",
      class : 12,
      rollno : 41,
      result :  "pass"
    },
    {
      name : "Imama",
      class : 12,
      rollno : 42,
      result : "fail"
    },
    
  ]

  constructor() { }

  highlightcolor="white"
  highlight(color:string){
    this.highlightcolor=color
  }

  click="underline"
  clickhere(){
    this.click="none"
  }

  ngOnInit(): void {
  }

}
