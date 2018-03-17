import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { flipProducts } from './flipproducts';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
@Injectable()
export class FlipserviceService {
  constructor(private _http:HttpClient) { }
  private proUrl="https://affiliate-api.flipkart.net/affiliate/search/json?query=sony+mobiles&resultCount=5";
  public getProducts():Observable<any[]>{
    return this._http.get(this.proUrl)
    .do(data=> console.log('All:'+JSON.stringify(data)))
    .catch(this.handleError);
  }
  private handleError(err:HttpErrorResponse){
      console.log(err.message);
      return Observable.throw(err.message||"server error");
  }
}
