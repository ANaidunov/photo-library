import { createAction, props } from "@ngrx/store";
import { Photo } from "../../models/photo.model";

export enum FavoritesActionTypes {
  MarkPhotoFavorite = '[FavoritePhotos] Mark photo as favorite',
  MarkPhotoFavoriteSuccess = '[FavoritePhotos] Mark photo as favorite success',
  MarkPhotoFavoriteFailure = '[FavoritePhotos] Mark photo as favorite failure',

  UnmarkPhotoFavorite = '[FavoritePhotos] Unmark photo as favorite',
  UnmarkPhotoFavoriteSuccess = '[FavoritePhotos] Unmark photo as favorite success',
  UnmarkPhotoFavoriteFailure = '[FavoritePhotos] Unmark photo as favorite failure',

  LoadFavorites = '[FavoritePhotos] Load favorites',
  LoadFavoritesSuccess = '[FavoritePhotos] Load favorites success',
  LoadFavoritesFailure = '[FavoritePhotos] Load favorites failure',

  SaveFavorites = '[FavoritePhotos] Save favorites',
  SaveFavoritesSuccess = '[FavoritePhotos] Save favorites success',
  SaveFavoritesFailure = '[FavoritePhotos] Save favorites failure',
}

export const markPhotoFavorite = createAction(FavoritesActionTypes.MarkPhotoFavorite, props<{ photo: Photo }>());
export const markPhotoFavoriteSuccess = createAction(FavoritesActionTypes.MarkPhotoFavoriteSuccess, props<{ photo: Photo }>());
export const markPhotoFavoriteFailure = createAction(FavoritesActionTypes.MarkPhotoFavoriteFailure, props<{ error: string }>());

export const unmarkPhotoFavorite = createAction(FavoritesActionTypes.UnmarkPhotoFavorite, props<{ photo: Photo }>());
export const unmarkPhotoFavoriteSuccess = createAction(FavoritesActionTypes.UnmarkPhotoFavoriteSuccess, props<{ photo: Photo }>());
export const unmarkPhotoFavoriteFailure = createAction(FavoritesActionTypes.UnmarkPhotoFavoriteFailure, props<{ error: string }>());

export const loadFavorites = createAction(FavoritesActionTypes.LoadFavorites);
export const loadFavoritesSuccess = createAction(FavoritesActionTypes.LoadFavoritesSuccess, props<{ favorites: Photo[] }>());
export const loadFavoritesFailure = createAction(FavoritesActionTypes.LoadFavoritesFailure, props<{ error: string }>());

export const saveFavorites = createAction(FavoritesActionTypes.SaveFavorites);
export const saveFavoritesSuccess = createAction(FavoritesActionTypes.SaveFavoritesSuccess);
export const saveFavoritesFailure = createAction(FavoritesActionTypes.SaveFavoritesFailure, props<{ error: string }>());
