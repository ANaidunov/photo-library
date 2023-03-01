import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoDetailsComponent } from './photo-details.component';
import { photoDetailsGuard } from './photo-details.guard';

const routes: Routes = [
  { path: ':id', component: PhotoDetailsComponent, canActivate: [photoDetailsGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoDetailsRoutingModule {}
