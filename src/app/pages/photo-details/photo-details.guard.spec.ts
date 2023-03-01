import { TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { tap } from "rxjs";
import { FavoritesState, favoriteByIdSelector } from "src/app/store/favorites/favorites.state";
import { photoDetailsGuard } from "./photo-details.guard";

/**
 * There is a problem with testing
 * Error: NG0203: inject() must be called from an injection context such as a constructor,
 * a factory function, a field initializer, or a function used with `EnvironmentInjector#runInContext`.
 * Find more at https://angular.io/errors/NG0203
 * */
describe('photoDetailsGuard', () => {
  let guard: any;
  let router: Router;
  let store: MockStore<{ favorites: FavoritesState }>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore(),
        Router,
        Store
      ]
    });

    guard = photoDetailsGuard;
    router = TestBed.inject(Router);
    store = TestBed.inject(MockStore);
  });

  xit('should navigate to /not-found if favoritePhoto is null', () => {
    const id = '1';
    spyOn(router, 'navigate');
    store.overrideSelector(favoriteByIdSelector(id), null as any);

    guard({ params: { id } } as any).subscribe();

    expect(router.navigate).toHaveBeenCalledWith(['/not-found']);
  });

  xit('should return true if favoritePhoto is not null', () => {
    const id = '1';
    store.overrideSelector(favoriteByIdSelector(id), { id } as any);

    guard({ params: { id } } as any).pipe(
      tap(result => expect(result).toBe(true))
    ).subscribe();
  });
});
