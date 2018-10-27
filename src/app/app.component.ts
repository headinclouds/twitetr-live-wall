import { Component } from '@angular/core';

import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parameter: URLSearchParams = new URLSearchParams();
  tweets: any;
  searchTweet:any;
constructor(public http: Http) { }

  getTweets(searchTweet:string) {
     this.parameter.set('param1', searchTweet);
     let requestOptions = new RequestOptions();
     requestOptions.search = this.parameter;
     return this.http.get('http://localhost:3000',  requestOptions)
       .map((res: Response) => res.json())
       .subscribe((res: any) => {
         this.tweets = res;
       });
   }
}
