import { photosReducer } from './photos.reducer';
import { initialState } from './photos.state';
import { loadNextPhotos, loadNextPhotosFailure, loadNextPhotosSuccess, resetPhotos } from './photos.actions';
import { Photo } from '../../models/photo.model';

describe('Photos reducer', () => {
  const photo1 = new Photo('1', 'https://example.com/1sunset.jpg', 'A beautiful sunset 1', 'https://example.com/1sunset_small.jpg');
  const photo2 = new Photo('2', 'https://example.com/2sunset.jpg', 'A beautiful sunset 2', 'https://example.com/2sunset_small.jpg');
  const photo3 = new Photo('3', 'https://example.com/3sunset.jpg', 'A beautiful sunset 3', 'https://example.com/3sunset_small.jpg');
  it('should handle resetPhotos action', () => {
    const initialStateWithPhotos = {
      ...initialState,
      photos: [photo1, photo2],
      nextPage: 2
    };
    const action = resetPhotos();
    const state = photosReducer(initialStateWithPhotos, action);
    expect(state.photos).toEqual(initialState.photos);
    expect(state.nextPage).toEqual(initialState.nextPage);
  });

  it('should handle loadNextPhotos action', () => {
    const action = loadNextPhotos();
    const state = photosReducer(initialState, action);
    expect(state.isLoading).toBe(true);
  });

  it('should handle loadNextPhotosSuccess action', () => {
    const initialStateWithPhotos = {
      ...initialState,
      photos: [photo1],
      nextPage: 1
    };
    const photosToAdd = [photo2, photo3];
    const action = loadNextPhotosSuccess({ photos: photosToAdd });
    const state = photosReducer(initialStateWithPhotos, action);
    expect(state.photos.length).toBe(3);
    expect(state.photos).toContain(photo2);
    expect(state.photos).toContain(photo3);
    expect(state.nextPage).toBe(2);
    expect(state.isLoading).toBe(false);
  });

  it('should handle loadNextPhotosFailure action', () => {
    const action = loadNextPhotosFailure({ error: 'error' });
    const state = photosReducer(initialState, action);
    expect(state.isLoading).toBe(false);
  });
});
