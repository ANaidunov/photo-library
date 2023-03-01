import { PhotosMockApiService } from './../../services/photos-mock-api.service';
import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { withLatestFrom, mergeMap, map, catchError, of, tap } from "rxjs";
import { PhotosApiService } from "../../services/photos-api.service";
import { markPhotoFavoriteFailure, unmarkPhotoFavoriteFailure } from "../favorites/favorites.actions";
import { loadNextPhotos, loadNextPhotosSuccess, loadNextPhotosFailure } from "./photos.actions";
import { nextPageSelector, PhotosState } from "./photos.state";

@Injectable()
export class PhotosEffects {
  loadPhotos$ = createEffect(() => this.actions$.pipe(
    ofType(loadNextPhotos),
    withLatestFrom(this.store.select(nextPageSelector)),
    // mergeMap(([, nextPage]) => this.photosApiService.getPhotos(nextPage) // uncomment it for real API calls
    mergeMap(([, nextPage]) => this.photosMockApiService.getPhotos(nextPage) // mocked data, comment it to switch back to real API
      .pipe(
        map(photos => (loadNextPhotosSuccess({ photos }))),
        catchError((error) => of(loadNextPhotosFailure({ error })))
      ))));

  errorHandler$ = createEffect(() => this.actions$.pipe(
    ofType(loadNextPhotosFailure, markPhotoFavoriteFailure, unmarkPhotoFavoriteFailure),
    tap(payload => console.error(payload.error)),
  ), { dispatch: false });

  constructor(
    private actions$: Actions,
    private photosApiService: PhotosApiService,
    private photosMockApiService: PhotosMockApiService,
    private store: Store<PhotosState>,
  ) {}
}
