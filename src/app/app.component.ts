import { Component } from '@angular/core';
import { TwitsService } from './services/twits.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tweets: any;
  constructor(private twits: TwitsService) { }

  getTweets(searchTweet: string) {
    this.twits.getTweets(searchTweet)
      .subscribe((res) => {
        this.tweets = res;
      },
        (err: HttpErrorResponse) => {
          alert(err.message);
        }
      )
  }
}
