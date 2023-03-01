import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PhotoDetailsRoutingModule } from "./photo-details-routing.module";
import { PhotoDetailsComponent } from "./photo-details.component";

@NgModule({
  declarations: [
    PhotoDetailsComponent
  ],
  imports: [
    CommonModule,
    PhotoDetailsRoutingModule,
  ]
})
export class PhotoDetailsModule {}