import { Photo } from '../../models/photo.model';
import { isLoadingSelector, nextPageSelector, photosSelector } from './photos.state';

describe('Favorites Selectors', () => {
  const photo1 = new Photo('1', 'https://example.com/1sunset.jpg', 'A beautiful sunset 1', 'https://example.com/1sunset_small.jpg');
  const photo2 = new Photo('2', 'https://example.com/2sunset.jpg', 'A beautiful sunset 2', 'https://example.com/2sunset_small.jpg');

  describe('isLoadingSelector', () => {
    it('should return isLoading status', () => {
      const isLoadingStatus = true;
      const state = { photos: [photo1, photo2], isLoading: isLoadingStatus, nextPage: 1 };

      const result = isLoadingSelector.projector(state);

      expect(result).toEqual(isLoadingStatus);
    });

    it('should return isLoading status', () => {
      const isLoadingStatus = false;
      const state = { photos: [photo1, photo2], isLoading: isLoadingStatus, nextPage: 1 };

      const result = isLoadingSelector.projector(state);

      expect(result).toEqual(isLoadingStatus);
    });
  });

  describe('photosSelector', () => {
    it('should return the list of photos', () => {
      const isLoadingStatus = false;
      const state = { photos: [photo1, photo2], isLoading: isLoadingStatus, nextPage: 1 };

      const result = photosSelector.projector(state);

      expect(result).toEqual([photo1, photo2]);
    });
  });

  describe('nextPageSelector', () => {
    it('should return nextPage', () => {
      const nextPage = 3;
      const state = { photos: [photo1, photo2], isLoading: true, nextPage: nextPage };

      const result = nextPageSelector.projector(state);

      expect(result).toEqual(nextPage);
    });
  });
});
