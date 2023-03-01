import { OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter, ElementRef, Renderer2 } from '@angular/core';
import { fromEvent, Subject, take, takeUntil } from 'rxjs';
@Component({
  selector: 'app-skeleton-image',
  templateUrl: './skeleton-image.component.html',
  styleUrls: ['./skeleton-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkeletonImageComponent implements AfterViewInit {
  @Input() src!: string;
  @Input() alt!: string;
  @Input() isScaled = false;
  @Output() onImageLoaded = new EventEmitter<void>();

  @ViewChild('loadedImage') image?: ElementRef;

  isLoaded = false;
  private destroyed$ = new Subject<void>();

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    fromEvent(this.image?.nativeElement, 'load', { once: true }) // fromEvent will remove events after fires once
      .pipe(
        take(1),
        takeUntil(this.destroyed$)
      ).subscribe(() => this.onImageLoad());
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  onImageLoad() {
    this.isLoaded = true;
    this.onImageLoaded.emit();
    this.cdr.detectChanges();
  }
}
