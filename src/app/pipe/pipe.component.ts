import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  constructor() { }

  day = new Date();
  name = 'sabana'
  num = 1234.56
  percentage = 0.87
  currency = 243545.89
  object = {name:'sabana',id:'3534'}
  array =[1,2,4,5,7,9,0]

  ngOnInit(): void {
  }

}
