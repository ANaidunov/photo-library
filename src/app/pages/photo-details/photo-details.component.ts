import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, map, switchMap } from "rxjs";
import { Photo } from "src/app/models/photo.model";
import { unmarkPhotoFavorite, saveFavorites } from "src/app/store/favorites/favorites.actions";
import { favoriteByIdSelector } from "src/app/store/favorites/favorites.state";
import { PhotosState } from "src/app/store/photos/photos.state";

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoDetailsComponent implements OnInit {
  photo$?: Observable<Photo | undefined>;
  isImageLoaded = false;

  constructor(private store: Store<PhotosState>, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.photo$ = this.route.params.pipe(
      map(params => params['id']),
      switchMap((id: string) => this.store.select(favoriteByIdSelector(id))));
  }

  removeFromFavorites(photo: Photo): void {
    this.store.dispatch(unmarkPhotoFavorite({ photo }));
    this.store.dispatch(saveFavorites());
    this.navigateToFavoritesPage();
  }

  navigateToFavoritesPage(): void {
    this.router.navigate(['/favorites']);
  }

  setImageLoaded() {
    this.isImageLoaded = true;
  }
}
