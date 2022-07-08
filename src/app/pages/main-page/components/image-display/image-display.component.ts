import { Component, Input, OnInit } from '@angular/core';
import { Photo } from '../../services/models';

@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.scss'],
})
export class ImageDisplayComponent implements OnInit {
  @Input() imageData?: Photo;

  constructor() {}

  ngOnInit(): void {}
}
