import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { InfiniteGalleryModule } from "src/app/features/infinite-gallery/infinite-gallery.module";
import { PhotosListRoutingModule } from "./photos-routing.module";
import { PhotosComponent } from "./photos.component";

@NgModule({
  declarations: [
    PhotosComponent
  ],
  imports: [
    CommonModule,
    InfiniteGalleryModule,
    PhotosListRoutingModule
  ]
})
export class PhotosListModule {}
