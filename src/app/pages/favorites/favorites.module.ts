import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FavoritesListRoutingModule } from "./favorites-routing.module";
import { FavoritesComponent } from "./favorites.component";

@NgModule({
  declarations: [
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    FavoritesListRoutingModule,
  ]
})
export class FavoritesListModule {}
