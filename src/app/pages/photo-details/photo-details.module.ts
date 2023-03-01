import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { SkeletonImageModule } from "src/app/features/skeleton-image/skeleton-image.module";
import { PhotoDetailsRoutingModule } from "./photo-details-routing.module";
import { PhotoDetailsComponent } from "./photo-details.component";

@NgModule({
  declarations: [
    PhotoDetailsComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    SkeletonImageModule,
    PhotoDetailsRoutingModule,
  ]
})
export class PhotoDetailsModule {}
