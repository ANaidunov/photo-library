import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonImageComponent } from './skeleton-image.component';

describe('SkeletonImageComponent', () => {
  let component: SkeletonImageComponent;
  let fixture: ComponentFixture<SkeletonImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkeletonImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeletonImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
