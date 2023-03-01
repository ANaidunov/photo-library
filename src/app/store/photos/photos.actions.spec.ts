import { Photo } from "../../models/photo.model";
import {
  resetPhotos,
  loadNextPhotos,
  loadNextPhotosSuccess,
  loadNextPhotosFailure,
  PhotosActionTypes,
} from "./photos.actions";

describe("Photos Actions", () => {
  const mockPhotos: Photo[] = [
    new Photo('2', 'https://example.com/2sunset.jpg', 'A beautiful sunset 2', 'https://example.com/2sunset_small.jpg'),
    new Photo('3', 'https://example.com/3sunset.jpg', 'A beautiful sunset 3', 'https://example.com/3sunset_small.jpg')
  ];
  const mockError = "An error occurred";

  describe("resetPhotos", () => {
    it("should create the resetPhotos action", () => {
      const action = resetPhotos();

      expect(action.type).toEqual(PhotosActionTypes.ResetPhotos);
    });
  });

  describe("loadNextPhotos", () => {
    it("should create the loadNextPhotos action", () => {
      const action = loadNextPhotos();

      expect(action.type).toEqual(PhotosActionTypes.LoadNextPhotos);
    });
  });

  describe("loadNextPhotosSuccess", () => {
    it("should create the loadNextPhotosSuccess action", () => {
      const action = loadNextPhotosSuccess({ photos: mockPhotos });

      expect(action.type).toEqual(PhotosActionTypes.LoadNextPhotosSuccess);
      expect(action.photos).toEqual(mockPhotos);
    });
  });

  describe("loadNextPhotosFailure", () => {
    it("should create the loadNextPhotosFailure action", () => {
      const action = loadNextPhotosFailure({ error: mockError });

      expect(action.type).toEqual(PhotosActionTypes.LoadNextPhotosFailure);
      expect(action.error).toEqual(mockError);
    });
  });
});
