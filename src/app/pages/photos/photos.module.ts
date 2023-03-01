import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PhotosListRoutingModule } from "./photos-routing.module";
import { PhotosComponent } from "./photos.component";

@NgModule({
  declarations: [
    PhotosComponent
  ],
  imports: [
    CommonModule,
    PhotosListRoutingModule
  ]
})
export class PhotosListModule {}
