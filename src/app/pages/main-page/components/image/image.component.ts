import { identifierName } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  @Input() src: string = '';
  @Input() id: number = 0;
  @Output() imageClick = new EventEmitter<number>();
  constructor() {}

  onClick() {
    this.imageClick.emit(this.id);
  }
  ngOnInit(): void {}
}
