import { Photo } from "../../models/photo.model";
import * as FavoritesActions from './favorites.actions';

describe('Favorites Actions', () => {
  const testPhoto = new Photo('1', 'https://example.com/1sunset.jpg', 'A beautiful sunset 1', 'https://example.com/1sunset_small.jpg');
  const favoritePhotos = [
    new Photo('2', 'https://example.com/2sunset.jpg', 'A beautiful sunset 2', 'https://example.com/2sunset_small.jpg'),
    new Photo('3', 'https://example.com/3sunset.jpg', 'A beautiful sunset 3', 'https://example.com/3sunset_small.jpg')
  ]
  const testError = 'Test Error';

  describe('MarkPhotoFavorite', () => {
    it('should create the MarkPhotoFavorite action', () => {
      const action = FavoritesActions.markPhotoFavorite({ photo: testPhoto });

      expect(action.type).toEqual(FavoritesActions.FavoritesActionTypes.MarkPhotoFavorite);
      expect(action.photo).toEqual(testPhoto);
    });
  });

  describe('MarkPhotoFavoriteSuccess', () => {
    it('should create the MarkPhotoFavoriteSuccess action', () => {
      const action = FavoritesActions.markPhotoFavoriteSuccess({ photo: testPhoto });

      expect(action.type).toEqual(FavoritesActions.FavoritesActionTypes.MarkPhotoFavoriteSuccess);
      expect(action.photo).toEqual(testPhoto);
    });
  });

  describe('MarkPhotoFavoriteFailure', () => {
    it('should create the MarkPhotoFavoriteFailure action', () => {
      const action = FavoritesActions.markPhotoFavoriteFailure({ error: testError });

      expect(action.type).toEqual(FavoritesActions.FavoritesActionTypes.MarkPhotoFavoriteFailure);
      expect(action.error).toEqual(testError);
    });
  });

  describe('UnmarkPhotoFavorite', () => {
    it('should create the UnmarkPhotoFavorite action', () => {
      const action = FavoritesActions.unmarkPhotoFavorite({ photo: testPhoto });

      expect(action.type).toEqual(FavoritesActions.FavoritesActionTypes.UnmarkPhotoFavorite);
      expect(action.photo).toEqual(testPhoto);
    });
  });

  describe('UnmarkPhotoFavoriteSuccess', () => {
    it('should create the UnmarkPhotoFavoriteSuccess action', () => {
      const action = FavoritesActions.unmarkPhotoFavoriteSuccess({ photo: testPhoto });

      expect(action.type).toEqual(FavoritesActions.FavoritesActionTypes.UnmarkPhotoFavoriteSuccess);
      expect(action.photo).toEqual(testPhoto);
    });
  });

  describe('UnmarkPhotoFavoriteFailure', () => {
    it('should create the UnmarkPhotoFavoriteFailure action', () => {
      const action = FavoritesActions.unmarkPhotoFavoriteFailure({ error: testError });

      expect(action.type).toEqual(FavoritesActions.FavoritesActionTypes.UnmarkPhotoFavoriteFailure);
      expect(action.error).toEqual(testError);
    });
  });

  describe('LoadFavorites', () => {
    it('should create the LoadFavorites action', () => {
      const action = FavoritesActions.loadFavorites();

      expect(action.type).toEqual(FavoritesActions.FavoritesActionTypes.LoadFavorites);
    });
  });

  describe('LoadFavoritesSuccess', () => {
    it('should create the LoadFavoritesSuccess action', () => {
      const testFavorites = favoritePhotos;
      const action = FavoritesActions.loadFavoritesSuccess({ favorites: testFavorites });

      expect(action.type).toEqual(FavoritesActions.FavoritesActionTypes.LoadFavoritesSuccess);
      expect(action.favorites).toEqual(testFavorites);
    });
  });

  describe('LoadFavoritesFailure', () => {
    it('should create the LoadFavoritesFailure action', () => {
      const action = FavoritesActions.loadFavoritesFailure({ error: testError });

      expect(action.type).toEqual(FavoritesActions.FavoritesActionTypes.LoadFavoritesFailure);
      expect(action.error).toEqual(testError);
    });
  });

  describe('SaveFavorites', () => {
    it('should create the SaveFavorites action', () => {
      const action = FavoritesActions.saveFavorites();

      expect(action.type).toEqual(FavoritesActions.FavoritesActionTypes.SaveFavorites);
    });
  });

  describe('SaveFavoritesSuccess', () => {
    it('should create the SaveFavoritesSuccess action', () => {
      const testFavorites = favoritePhotos;
      const action = FavoritesActions.saveFavoritesSuccess();

      expect(action.type).toEqual(FavoritesActions.FavoritesActionTypes.SaveFavoritesSuccess);
    });
  });

  describe('SaveFavoritesFailure', () => {
    it('should create the SaveFavoritesFailure action', () => {
      const action = FavoritesActions.saveFavoritesFailure({ error: testError });

      expect(action.type).toEqual(FavoritesActions.FavoritesActionTypes.SaveFavoritesFailure);
      expect(action.error).toEqual(testError);
    });
  });
});
