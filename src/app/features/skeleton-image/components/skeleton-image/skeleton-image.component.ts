import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-skeleton-image',
  templateUrl: './skeleton-image.component.html',
  styleUrls: ['./skeleton-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkeletonImageComponent {
  @Input() src!: string;
  @Input() alt!: string;
  @Input() isScaled = false;
  @Output() onImageLoaded = new EventEmitter<void>();

  isLoaded = false;

  onImageLoad(): void {
    this.isLoaded = true;
    this.onImageLoaded.emit();
  }
}
