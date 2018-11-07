import { Injectable } from '@angular/core';

import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Rx";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TwitsService {
 //parameter: URLSearchParams = new URLSearchParams();
  url: string;
  searchTweet:any;
constructor(private http: HttpClient) { }

  getTweets(searchTweet:string)/*: Observable<any> */{
   // this.parameter.set('param1', searchTweet);
    // let requestOptions = new RequestOptions();
   //  requestOptions.search = this.parameter;
    this.url = `http://localhost:3000?param1=${searchTweet}`;
     return this.http.get(this.url)
     /*.catch(
        (err) => {    
          return Observable.throw(err._body.type)} 
       )*/
   }
}
