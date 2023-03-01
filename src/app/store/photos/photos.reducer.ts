import { loadNextPhotos, loadNextPhotosFailure, loadNextPhotosSuccess, resetPhotos } from './photos.actions';
import { createReducer, on } from "@ngrx/store";
import { initialState } from './photos.state';

export const photosReducer = createReducer(
  initialState,
  on(resetPhotos, state => ({
    ...state,
    photos: initialState.photos,
    nextPage: initialState.nextPage
  })),

  on(loadNextPhotos, state => ({ ...state, isLoading: true })),

  on(loadNextPhotosSuccess, (state, { photos }) => {
    return {
      ...state,
      photos: [...state.photos, ...photos],
      isLoading: false,
      nextPage: state.nextPage + 1
    };
  }),

  on(loadNextPhotosFailure,
    state => ({
      ...state,
      isLoading: false
    })
  ),
);
