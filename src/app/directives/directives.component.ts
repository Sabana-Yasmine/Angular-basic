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
      class : "10-A",
      rollno : 10,
    },
    {
      name : "Yasmine",
      class : "10-B",
      rollno : 10,
    },
    {
      name : "Mizla",
      class : "10-A",
      rollno : 11,
    },
    {
      name : "Imama",
      class : "10-B",
      rollno : 11,
    },
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
