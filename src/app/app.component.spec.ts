import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { AppComponent } from "./app.component";
import { HeaderModule } from "./features/header/header.module";
import { PhotosState } from "./store/photos/photos.state";

describe('AppComponent', () => {
  const initialState = {};
  let store: MockStore<PhotosState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HeaderModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        provideMockStore({ initialState })
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    store = TestBed.inject(MockStore);
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
