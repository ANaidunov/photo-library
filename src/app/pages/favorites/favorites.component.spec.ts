import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { InfiniteGalleryModule } from "src/app/features/infinite-gallery/infinite-gallery.module";
import { FavoritesState } from "src/app/store/favorites/favorites.state";
import { FavoritesListRoutingModule } from "./favorites-routing.module";
import { FavoritesComponent } from "./favorites.component";

describe('FavoritesComponent', () => {
  let component: FavoritesComponent;
  let fixture: ComponentFixture<FavoritesComponent>;
  let store: MockStore<FavoritesState>;

  const initialState = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        InfiniteGalleryModule,
        FavoritesListRoutingModule
      ],
      declarations: [FavoritesComponent],
      providers: [provideMockStore({ initialState })]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FavoritesComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
