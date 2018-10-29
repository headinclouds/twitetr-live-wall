import { Component } from '@angular/core';
import { TwitsService } from './services/twits.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tweets: any;
  constructor(private twits: TwitsService) { }

  getTweets(searchTweet: string) {
    this.twits.getTweets(searchTweet).subscribe((res: any) => {
      this.tweets = res;
    }, error => alert(error));
  }
}
