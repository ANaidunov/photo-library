import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Photo } from "../../models/photo.model";

export interface PhotosState {
  photos: Photo[];
  isLoading: boolean;
  nextPage: number;
}

export const initialState: PhotosState = {
  photos: [],
  isLoading: false,
  nextPage: 1,
}

export const featureSelector = createFeatureSelector<PhotosState>('photos');

export const photosSelector = createSelector(featureSelector, state => state.photos);
export const isLoadingSelector = createSelector(featureSelector, state => state.isLoading);
export const nextPageSelector = createSelector(featureSelector, state => state.nextPage);
