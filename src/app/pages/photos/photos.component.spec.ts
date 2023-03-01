import { CommonModule } from "@angular/common";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { StoreModule } from "@ngrx/store";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { Observable, of } from "rxjs";
import { InfiniteGalleryModule } from "src/app/features/infinite-gallery/infinite-gallery.module";
import { Photo } from "src/app/models/photo.model";
import { markPhotoFavorite, saveFavorites } from "src/app/store/favorites/favorites.actions";
import { loadNextPhotos } from "src/app/store/photos/photos.actions";
import { PhotosState } from "src/app/store/photos/photos.state";
import { PhotosListRoutingModule } from "./photos-routing.module";
import { PhotosComponent } from "./photos.component";

describe('PhotosComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;
  let store: MockStore<PhotosState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        InfiniteGalleryModule,
        PhotosListRoutingModule,
        StoreModule.forRoot({})
      ],
      declarations: [PhotosComponent],
      providers: [
        provideMockStore({
          initialState: {
            photos: {
              photos: [],
              isLoading: false,
            },
            favorites: {
              favoritePhotos: [],
            },
          },
        }),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should not load next photos if photos are already loaded', () => {
      const photos$: Observable<Photo[]> = of([{ id: 1, title: 'Photo 1' } as any]);
      spyOn(store, 'select').and.returnValue(photos$);

      spyOn(component, 'loadNextPhotos');

      component.ngOnInit();

      expect(component.loadNextPhotos).not.toHaveBeenCalled();
    });

    it('should set isLoading$ to the correct value', () => {
      const isLoading$: Observable<boolean> = of(true);
      spyOn(store, 'select').and.returnValue(isLoading$);

      component.ngOnInit();

      expect(component.isLoading$).toEqual(isLoading$);
    });
  });

  describe('loadNextPhotos', () => {
    it('should dispatch the loadNextPhotos action', () => {
      spyOn(store, 'dispatch');

      component.loadNextPhotos();

      expect(store.dispatch).toHaveBeenCalledWith(loadNextPhotos());
    });
  });

  describe('addToFavorites', () => {
    it('should dispatch the markPhotoFavorite and saveFavorites actions', () => {
      const photo: Photo = { id: '1', title: 'Photo 1' } as any;

      spyOn(store, 'dispatch');

      component.addToFavorites(photo);

      expect(store.dispatch).toHaveBeenCalledWith(markPhotoFavorite({ photo }));
      expect(store.dispatch).toHaveBeenCalledWith(saveFavorites());
    });
  });
});
