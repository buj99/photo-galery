import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Photo } from '../../services/models';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent implements OnChanges {
  @Input() images: Photo[] = new Array<Photo>();
  @Input() currentIndex: number = 0;
  @Output() currentIndexChange = new EventEmitter<number>();

  imagesToDisplay: Photo[] = [];
  offset: number = 7;

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    this.calculateImageToDisplay();
  }

  onImageClick(imageId: any) {
    this.currentIndex = this.images.findIndex((img) => img.id === imageId);
    this.calculateImageToDisplay();
  }

  private calculateImageToDisplay() {
    this.imagesToDisplay = this.images.slice(
      this.currentIndex,
      this.currentIndex + this.offset
    );
  }
}
