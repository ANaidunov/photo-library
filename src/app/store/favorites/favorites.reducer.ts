import { loadFavoritesSuccess, markPhotoFavorite, unmarkPhotoFavorite } from './favorites.actions';
import { createReducer, on } from "@ngrx/store";
import { initialState } from "./favorites.state";

export const favoritesReducer = createReducer(
  initialState,
  on(loadFavoritesSuccess, (state, { favorites }) => ({
    ...state,
    favorites: favorites,
  })),

  on(markPhotoFavorite, (state, { photo }) => {
    if (state.favorites.map(p => p.id).includes(photo.id)) {
      return { ...state };
    }
    return ({
      ...state,
      favorites: [...state.favorites, photo]
    })
  }),

  on(unmarkPhotoFavorite, (state, { photo }) => {
    return ({
      ...state,
      favorites: state.favorites.filter(p => p.id !== photo.id)
    })
  }),
);
