import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TwitsService } from './twits.service';
import { HttpModule } from '@angular/http';

describe('TwitsService', () => {
  let service: TwitsService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TwitsService],
      imports: [HttpClientTestingModule, HttpModule]

    });
    // inject the service
    service = TestBed.get(TwitsService);
    httpMock = TestBed.get(HttpTestingController);
  });


   it('should be created', inject([HttpTestingController, TwitsService], (httpMock: HttpTestingController, service: TwitsService) => {
     expect(service).toBeTruthy();
   }));

 it('should get the data successful', inject([HttpTestingController, TwitsService], 
    (httpMock: HttpTestingController, service: TwitsService) => {
    service.getTweets('Test').subscribe((data: any) => {
      expect(data).toBeDefined();
    });
  }));
});
