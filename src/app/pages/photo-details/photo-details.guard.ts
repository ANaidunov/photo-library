import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { FavoritesState, favoriteByIdSelector } from 'src/app/store/favorites/favorites.state';

export const photoDetailsGuard = (route: ActivatedRouteSnapshot) => {
  const router = inject(Router);
  const store = inject(Store<FavoritesState>);

  const id = route.params['id'];

  return store.select(favoriteByIdSelector(id)).pipe(
    tap(favoritePhoto => {
      return favoritePhoto ? true : router.navigate(['/not-found']);
    }));
};
