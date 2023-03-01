import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonImageComponent } from './components/skeleton-image/skeleton-image.component';

@NgModule({
  declarations: [
    SkeletonImageComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SkeletonImageComponent
  ]
})
export class SkeletonImageModule {}
