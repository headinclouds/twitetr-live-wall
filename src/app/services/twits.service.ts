import { Injectable } from '@angular/core';

import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Rx"
@Injectable({
  providedIn: 'root'
})
export class TwitsService {

  parameter: URLSearchParams = new URLSearchParams();

  searchTweet:any;
constructor(private http: Http) { }

  getTweets(searchTweet:string) {
     this.parameter.set('param1', searchTweet);
     let requestOptions = new RequestOptions();
     requestOptions.search = this.parameter;
     return this.http.get('http://localhost:3000',  requestOptions)
       .map((res: Response) => {return res.json()}).catch(
        (err) => {         
          return Observable.throw(err._body.type)}
       )
   }
}
