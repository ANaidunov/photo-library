import { favoritesReducer } from './favorites.reducer';
import { initialState } from './favorites.state';
import { loadFavoritesSuccess, markPhotoFavorite, unmarkPhotoFavorite } from './favorites.actions';
import { Photo } from '../../models/photo.model';

describe('Favorites reducer', () => {
  const photo1 = new Photo('1', 'https://example.com/1sunset.jpg', 'A beautiful sunset 1', 'https://example.com/1sunset_small.jpg');
  const photo2 = new Photo('2', 'https://example.com/2sunset.jpg', 'A beautiful sunset 2', 'https://example.com/2sunset_small.jpg');
  it('should handle loadFavoritesSuccess action', () => {
    const favorites = [
      photo1, photo2
    ];
    const action = loadFavoritesSuccess({ favorites });
    const state = favoritesReducer(initialState, action);
    expect(state.favorites).toEqual(favorites);
  });

  it('should handle markPhotoFavorite action when photo is not already favorited', () => {
    const action = markPhotoFavorite({ photo: photo1 });
    const state = favoritesReducer(initialState, action);
    expect(state.favorites.length).toBe(1);
    expect(state.favorites[0]).toEqual(photo1);
  });

  it('should handle markPhotoFavorite action when photo is already favorited', () => {
    const existingPhoto = photo1;
    const initialStateWithPhoto = {
      ...initialState,
      favorites: [existingPhoto]
    };
    const action = markPhotoFavorite({ photo: photo1 });
    const state = favoritesReducer(initialStateWithPhoto, action);
    expect(state.favorites.length).toBe(1);
    expect(state.favorites[0]).toEqual(existingPhoto);
  });

  it('should handle unmarkPhotoFavorite action', () => {
    const existingPhoto = photo1;
    const initialStateWithPhoto = {
      ...initialState,
      favorites: [existingPhoto]
    };
    const action = unmarkPhotoFavorite({ photo: existingPhoto });
    const state = favoritesReducer(initialStateWithPhoto, action);
    expect(state.favorites.length).toBe(0);
  });
});
