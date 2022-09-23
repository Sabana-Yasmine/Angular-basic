import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http : HttpClient) { }
  count = 0

  getProduct() : Observable<any>{
    return this.http.get("http://localhost:402/product/getallproduct")
  }
}
