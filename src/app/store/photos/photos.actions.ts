import { createAction, props } from "@ngrx/store";
import { Photo } from "../../models/photo.model";

export enum PhotosActionTypes {
  ResetPhotos = '[Photos] Reset photos to initial state',

  LoadNextPhotos = '[Photos] Load next photos',
  LoadNextPhotosSuccess = '[Photos] Load Next photos Success',
  LoadNextPhotosFailure = "[Photos] Load Next photos Failure",
}

export const resetPhotos = createAction(PhotosActionTypes.ResetPhotos);

export const loadNextPhotos = createAction(PhotosActionTypes.LoadNextPhotos);
export const loadNextPhotosSuccess = createAction(PhotosActionTypes.LoadNextPhotosSuccess, props<{ photos: Photo[] }>());
export const loadNextPhotosFailure = createAction(PhotosActionTypes.LoadNextPhotosFailure, props<{ error: string }>());
