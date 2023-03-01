import { Photo } from '../../models/photo.model';
import { favoriteByIdSelector, favoritePhotosSelector } from './favorites.state';

describe('Favorites Selectors', () => {
  const photo1 = new Photo('1', 'https://example.com/1sunset.jpg', 'A beautiful sunset 1', 'https://example.com/1sunset_small.jpg');
  const photo2 = new Photo('2', 'https://example.com/2sunset.jpg', 'A beautiful sunset 2', 'https://example.com/2sunset_small.jpg');

  describe('favoriteByIdSelector', () => {
    it('should return the photo with the matching ID', () => {
      const state = { favorites: [photo1, photo2] };

      const result = favoriteByIdSelector('1').projector(state.favorites);

      expect(result).toEqual(photo1);
    });
  });

  describe('favoritePhotosSelector', () => {
    it('should return the list of favorite photos', () => {
      const state = { favorites: [photo1, photo2] };

      const result = favoritePhotosSelector.projector(state);

      expect(result).toEqual([photo1, photo2]);
    });
  });
});
