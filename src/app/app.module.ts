import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TwitsService } from './services/twits.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    //  ReactiveFormsModule,
    HttpModule
    
  ],
  providers: [TwitsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
