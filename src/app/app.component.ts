import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ImagesServiceService } from './pages/main-page/services/images-service.service';
import { Photo, SearchPhotosModel } from './pages/main-page/services/models';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  images: Photo[] = [];
  totalImages: number = 0;
  imagesIndex: number = 0;
  constructor(private imagesService: ImagesServiceService) {}
  ngOnInit(): void {
    this.imagesService.getImages().subscribe((res: SearchPhotosModel) => {
      this.images = res.photos;
      this.totalImages = res.per_page - 1;
    });
  }
}
