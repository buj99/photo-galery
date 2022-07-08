import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImagesServiceService } from './services/images-service.service';
import { Photo, SearchPhotosModel } from './services/models';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  constructor() {}

  @Input() images: Photo[] = [];
  @Input() totalImages: number = 0;
  @Input() imagesIndex: number = 0;
  @Output() imagesIndexChange = new EventEmitter<number>();

  ngOnInit(): void {
    this.totalImages = this.images.length;
  }

  changeIndex(incrementer: number) {
    this.imagesIndexChange.emit(
      this.imagesIndex == 0
        ? this.totalImages
        : (this.imagesIndex + incrementer) % this.totalImages
    );
  }
}
