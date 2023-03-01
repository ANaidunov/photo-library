

import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatGridListModule } from '@angular/material/grid-list';
import { SkeletonImageModule } from 'src/app/features/skeleton-image/skeleton-image.module';
import { SpinnerModule } from 'src/app/features/spinner/spinner.module';
import { InfiniteGalleryComponent } from './infinite-gallery.component';

describe('InfiniteGalleryComponent', () => {
  let component: InfiniteGalleryComponent;
  let fixture: ComponentFixture<InfiniteGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfiniteGalleryComponent],
      imports: [
        CommonModule,
        MatGridListModule,
        SkeletonImageModule,
        SpinnerModule,
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfiniteGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
