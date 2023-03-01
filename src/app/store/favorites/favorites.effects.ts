import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, catchError, of, withLatestFrom, mergeMap, tap } from "rxjs";
import { LocalStorageKeys } from "../../services/constants/local-storage.constants";
import { LocalStorageService } from "../../services/local-storage.service";
import { PhotosState } from "../photos/photos.state";
import { loadFavorites, loadFavoritesSuccess, loadFavoritesFailure, saveFavorites, saveFavoritesSuccess, saveFavoritesFailure, markPhotoFavoriteFailure, unmarkPhotoFavoriteFailure } from "./favorites.actions";
import { favoritePhotosSelector } from "./favorites.state";

@Injectable()
export class FavoritesEffects {
  loadFavoritesFromLocaleStorage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadFavorites),
      map(() => {
        const favorites = JSON.parse(localStorage.getItem(LocalStorageKeys.Favorites) ?? '[]');
        return loadFavoritesSuccess({ favorites });
      }),
      catchError((error) => of(loadFavoritesFailure({ error })))
    ));

  saveFavoritesToLocalStorage$ = createEffect(() => this.actions$.pipe(
    ofType(saveFavorites),
    withLatestFrom(this.store.select(favoritePhotosSelector)),
    mergeMap(([, favorites]) => {
      this.localStorageService.setItem(LocalStorageKeys.Favorites, JSON.stringify(favorites));
      return of(saveFavoritesSuccess());
    }),
    catchError((error) => of(saveFavoritesFailure({ error })))
  ));

  errorHandler$ = createEffect(() => this.actions$.pipe(
    ofType(markPhotoFavoriteFailure, unmarkPhotoFavoriteFailure),
    tap(payload => console.error(payload.error)),
  ), { dispatch: false });

  constructor(
    private actions$: Actions,
    private localStorageService: LocalStorageService,
    private store: Store<PhotosState>,
  ) {}
}
