import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Photo } from "src/app/models/photo.model";
import { favoritePhotosSelector } from "src/app/store/favorites/favorites.state";
import { PhotosState } from "src/app/store/photos/photos.state";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesComponent implements OnInit {
  photos$?: Observable<Photo[]>;

  constructor(private store: Store<PhotosState>, private router: Router) {}

  ngOnInit(): void {
    this.photos$ = this.store.select(favoritePhotosSelector);
  }

  goToDetails(photo: Photo): void {
    this.router.navigate(['/photos', photo.id]);
  }
}
