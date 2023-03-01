import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { InfiniteGalleryModule } from "src/app/features/infinite-gallery/infinite-gallery.module";
import { FavoritesListRoutingModule } from "./favorites-routing.module";
import { FavoritesComponent } from "./favorites.component";

@NgModule({
  declarations: [
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    InfiniteGalleryModule,
    FavoritesListRoutingModule,
  ]
})
export class FavoritesListModule {}
