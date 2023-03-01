import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, tap } from "rxjs";
import { Photo } from "src/app/models/photo.model";
import { markPhotoFavorite, saveFavorites } from "src/app/store/favorites/favorites.actions";
import { loadNextPhotos } from "src/app/store/photos/photos.actions";
import { PhotosState, photosSelector, isLoadingSelector } from "src/app/store/photos/photos.state";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotosComponent implements OnInit {
  photos$?: Observable<Photo[]>;
  isLoading$?: Observable<boolean>;

  constructor(private store: Store<PhotosState>) {}

  ngOnInit(): void {
    this.photos$ = this.store.select(photosSelector).pipe(
      tap(photos => {
        if (!photos.length) {
          this.loadNextPhotos();
        }
      })
    );
    this.isLoading$ = this.store.select(isLoadingSelector);
  }

  loadNextPhotos(): void {
    this.store.dispatch(loadNextPhotos());
  }

  addToFavorites(photo: Photo): void {
    this.store.dispatch(markPhotoFavorite({ photo }));
    this.store.dispatch(saveFavorites());
  }
}
