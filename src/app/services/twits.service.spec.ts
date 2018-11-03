import { TestBed, inject, async } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TwitsService } from './twits.service';
import { HttpModule  } from '@angular/http';

describe('TwitsService', () => {
  let service: TwitsService;
  let httpMock: HttpTestingController;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TwitsService],
      imports: [HttpClientTestingModule, HttpModule]

    });
    // inject the service
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = TestBed.get(TwitsService);
    httpMock = TestBed.get(HttpTestingController);
  });


  it('should be created', inject([HttpTestingController, TwitsService], (httpMock: HttpTestingController, service: TwitsService) => {
    expect(service).toBeTruthy();
  }));
  it('should call get with correct URL', async(inject([HttpTestingController, TwitsService], (httpMock: HttpTestingController, service: TwitsService) => {
    service.getTweets('Test').subscribe((data) => {
      

    })
    httpMock.expectNone({});
      console.log(service, 'httpMock')
   //   httpMock.expectOne(req)
  })));

  it('should get the data successful', async(inject([HttpTestingController, TwitsService],
    (httpMock: HttpTestingController, service: TwitsService) => {
      service.getTweets('Test').subscribe((data: Array<Object>) => {
        expect(typeof (data)).toEqual('object');
        expect(data.length).toBeGreaterThanOrEqual(0);
      }, error => { 
        expect(error).toContain('error');
       });
    })));


});
