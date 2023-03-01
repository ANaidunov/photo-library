import { SpinnerModule } from './../spinner/spinner.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { SkeletonImageModule } from '../skeleton-image/skeleton-image.module';
import { InfiniteGalleryComponent } from './components/infinite-gallery/infinite-gallery.component';

@NgModule({
  declarations: [
    InfiniteGalleryComponent,
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    SkeletonImageModule,
    SpinnerModule,
  ],
  exports: [
    InfiniteGalleryComponent,
  ]
})
export class InfiniteGalleryModule {}
