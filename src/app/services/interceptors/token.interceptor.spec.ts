import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';
import { AUTH_TOKEN_HEADER } from '../constants/token.constants';

describe('TokenInterceptor', () => {
  let interceptor: TokenInterceptor;
  let http: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TokenInterceptor,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptor,
          multi: true,
        },
      ],
    });

    interceptor = TestBed.inject(TokenInterceptor);
    http = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should set the Authorization header with the token constant', () => {
    const mockRequest = http.get('/data');
    mockRequest.subscribe((data) => {
      expect(data).toBeTruthy();
    });

    const mockHeaders = { Authorization: AUTH_TOKEN_HEADER };
    const mockResponse = { data: 'mock-data' };

    const mockHttpRequest = httpMock.expectOne('/data');
    expect(mockHttpRequest.request.headers.get('Authorization')).toEqual(
      AUTH_TOKEN_HEADER
    );

    mockHttpRequest.flush(mockResponse, { headers: mockHeaders });
  });
});
