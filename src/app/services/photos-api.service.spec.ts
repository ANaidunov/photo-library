import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PhotosApiService } from './photos-api.service';
import { PhotoAdapter } from '../models/adapters/photo-adapter';
import { Photo, PhotoDto } from '../models/photo.model';
import { MAX_PAGE_SIZE, START_PAGE } from './constants/request-params.constants';

describe('PhotosApiService', () => {
  let service: PhotosApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PhotoAdapter, PhotosApiService],
    });

    service = TestBed.inject(PhotosApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('getPhotos', () => {
    it('should return an Observable<Photo[]> with the list of photos', () => {
      const mockResponse: Partial<PhotoDto>[] = [
        {
          id: '1',
          urls: {
            full: 'https://example.com/1sunset.jpg',
            small: 'https://example.com/1sunset_small.jpg',
            raw: 'https://example.com/1sunset_raw.jpg',
            regular: 'https://example.com/1sunset_regular.jpg',
            small_s3: 'https://example.com/1sunset_small_s3.jpg',
            thumb: 'https://example.com/1sunset_thumb.jpg',
          },
          alt_description: 'A beautiful sunset 1'
        },
        {
          id: '2',
          urls: {
            full: 'https://example.com/2sunset.jpg',
            small: 'https://example.com/2sunset_small.jpg',
            raw: 'https://example.com/2sunset_raw.jpg',
            regular: 'https://example.com/2sunset_regular.jpg',
            small_s3: 'https://example.com/2sunset_small_s3.jpg',
            thumb: 'https://example.com/2sunset_thumb.jpg',
          },
          alt_description: 'A beautiful sunset 2'
        },
        {
          id: '3',
          urls: {
            full: 'https://example.com/3sunset.jpg',
            small: 'https://example.com/3sunset_small.jpg',
            raw: 'https://example.com/3sunset_raw.jpg',
            regular: 'https://example.com/3sunset_regular.jpg',
            small_s3: 'https://example.com/3sunset_small_s3.jpg',
            thumb: 'https://example.com/3sunset_thumb.jpg',
          },
          alt_description: 'A beautiful sunset 3'
        },
      ];

      const expectedResponse: Photo[] = [
        new Photo('1', 'https://example.com/1sunset.jpg', 'A beautiful sunset 1', 'https://example.com/1sunset_small.jpg'),
        new Photo('2', 'https://example.com/2sunset.jpg', 'A beautiful sunset 2', 'https://example.com/2sunset_small.jpg'),
        new Photo('3', 'https://example.com/3sunset.jpg', 'A beautiful sunset 3', 'https://example.com/3sunset_small.jpg'),
      ];

      service.getPhotos().subscribe((photos: Photo[]) => {
        expect(photos).toEqual(expectedResponse);
      });

      const req = httpTestingController.expectOne(`https://api.unsplash.com/photos?page=${START_PAGE}&per_page=${MAX_PAGE_SIZE}`);
      expect(req.request.method).toEqual('GET');
      req.flush(mockResponse);
    });
  });
});
