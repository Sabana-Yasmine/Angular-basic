import { Component, OnInit } from '@angular/core';
import { SampleService } from '../service/sample.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
  providers : [SampleService]
})
export class SampleComponent implements OnInit {

  constructor(public sample : SampleService) { }
  
  increase(){
    this.sample.count ++
  }

  productDetails : any

  getProd(){
    this.sample.getProduct().subscribe(res=>{
      console.log("res", res)
      this.productDetails = res.result
    })
  }
  
  ngOnInit(): void {
  }

}
