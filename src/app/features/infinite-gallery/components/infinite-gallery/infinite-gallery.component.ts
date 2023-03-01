import { Component, ChangeDetectionStrategy, Input, OnDestroy, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Photo } from 'src/app/models/photo.model';


@Component({
  selector: 'app-infinite-gallery',
  templateUrl: './infinite-gallery.component.html',
  styleUrls: ['./infinite-gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfiniteGalleryComponent implements AfterViewInit, OnDestroy {
  @Input() photos?: Photo[] | null;
  @Input() tilesInRow = 3;
  @Input() paddingBetweenTiles = '5px';
  @Input() isScaled = false;
  @Input() isLoading?: boolean | null;
  @Output() onLastRowReached = new EventEmitter<void>();
  @Output() onClick = new EventEmitter<Photo>();

  @ViewChild('lastElement') lastElement?: ElementRef;

  private intersectionObserver?: IntersectionObserver;

  constructor() {}

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
  }

  ngOnDestroy(): void {
    this.intersectionObserver?.disconnect();
  }

  onPhotoClick(photo: Photo) {
    this.onClick.emit(photo);
  }

  private setupIntersectionObserver() {
    const threshold = 0.2; // how much % of the element is in view
    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.onLastRowReached.emit();
          }
        });
      },
      { threshold }
    );
    if (this.lastElement) {
      this.intersectionObserver.observe(this.lastElement.nativeElement);
    }
  }
}
