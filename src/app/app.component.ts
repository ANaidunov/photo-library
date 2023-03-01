import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { loadFavorites } from "./store/favorites/favorites.actions";
import { FavoritesState } from "./store/favorites/favorites.state";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {

  constructor(private store: Store<FavoritesState>) {}
  ngOnInit(): void {
    this.store.dispatch(loadFavorites());
  }
}
