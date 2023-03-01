// import { TestScheduler } from 'rxjs/testing';
// import { PhotosApiService } from '../../services/photos-api.service';
// import { PhotosMockApiService } from '../../services/photos-mock-api.service';
// import { PhotosEffects } from './photos.effects';
// import { of } from 'rxjs';
// import {
//   loadNextPhotos,
//   loadNextPhotosSuccess,
//   loadNextPhotosFailure,
// } from './photos.actions';
// import {
//   markPhotoFavoriteFailure,
//   unmarkPhotoFavoriteFailure,
// } from '../favorites/favorites.actions';
// import { Store, StoreModule } from '@ngrx/store';
// import { TestBed } from '@angular/core/testing';
// import { Photo } from '../../models/photo.model';
// import { initialState } from './photos.state';
// import { provideMockActions } from '@ngrx/effects/testing';
// import { photosReducer } from './photos.reducer';
// import { HttpClientModule } from '@angular/common/http';

// describe('PhotosEffects', () => {
//   let effects: PhotosEffects;
//   let actions$: any;
//   let store: any;
//   let mockApiService: jasmine.SpyObj<PhotosMockApiService>;
//   let photosApiService: PhotosMockApiService;
//   let testScheduler: TestScheduler;

//   const photo1 = new Photo('1', 'https://example.com/1sunset.jpg', 'A beautiful sunset 1', 'https://example.com/1sunset_small.jpg');

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         StoreModule.forRoot({}),
//         StoreModule.forFeature('photos', photosReducer),
//         HttpClientModule,
//       ],
//       providers: [
//         PhotosEffects,
//         PhotosMockApiService,
//         provideMockActions(() => actions$),
//       ],
//     });

//     effects = TestBed.inject(PhotosEffects);
//     photosApiService = TestBed.inject(PhotosMockApiService);
//     testScheduler = new TestScheduler((actual, expected) => {
//       expect(actual).toEqual(expected);
//     });
//   });

//   it('should load next photos successfully', () => {
//     const mockPhotos = [photo1];
//     const expectedAction = loadNextPhotosSuccess({ photos: mockPhotos });
//     mockApiService.getPhotos.and.returnValue(of(mockPhotos));
//     store.select.and.returnValue(of(0));

//     testScheduler.run(({ expectObservable }) => {
//       expectObservable(effects.loadPhotos$).toBe('a', {
//         a: expectedAction,
//       });
//     });
//     expect(mockApiService.getPhotos).toHaveBeenCalled();
//   });

//   it('should handle error when loading next photos', () => {
//     const error = new Error('Something went wrong');
//     const expectedAction = loadNextPhotosFailure({ error: error.message });
//     mockApiService.getPhotos.and.returnValue(of(error as any));
//     store.select.and.returnValue(of(0));

//     testScheduler.run(({ expectObservable }) => {
//       expectObservable(effects.loadPhotos$).toBe('a', {
//         a: expectedAction,
//       });
//     });
//     expect(mockApiService.getPhotos).toHaveBeenCalled();
//   });

//   it('should handle error when marking a photo as favorite', () => {
//     const error = new Error('Something went wrong');
//     const expectedAction = markPhotoFavoriteFailure({ error: error.message });

//     testScheduler.run(({ expectObservable }) => {
//       expectObservable(effects.errorHandler$).toBe('--a', {
//         a: expectedAction,
//       });
//     });
//   });

//   it('should handle error when unmarking a photo as favorite', () => {
//     const error = new Error('Something went wrong');
//     const expectedAction = unmarkPhotoFavoriteFailure({ error: error.message });

//     testScheduler.run(({ expectObservable }) => {
//       expectObservable(effects.errorHandler$).toBe('--a', {
//         a: expectedAction,
//       });
//     });
//   });
// });
