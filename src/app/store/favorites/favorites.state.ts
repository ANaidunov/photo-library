import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Photo } from "../../models/photo.model";

export interface FavoritesState {
  favorites: Photo[];
}

export const initialState: FavoritesState = {
  favorites: [],
}

export const featureSelector = createFeatureSelector<FavoritesState>('favorites');

export const favoritePhotosSelector = createSelector(featureSelector, state => state.favorites);
export const favoriteByIdSelector = (id: string) => createSelector(favoritePhotosSelector, favorites => favorites.find(p => p.id === id));
