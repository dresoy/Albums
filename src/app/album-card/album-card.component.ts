import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../album';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {

  @Input() data: Album;
  @Input() indexValue: number;

  borderClass;

  constructor() { }

  ngOnInit() {
    this.borderClass = getBorder(this.indexValue);
  }



}

function getBorder(index) {

  var borderClass = 'card';

  switch (index) {
    case 0:
      borderClass = 'card border-green';
      break;

    case 1:
      borderClass = 'card border-blue';
      break;

    case 2:
      borderClass = 'card border-purple';
      break;

    default:
      break;
  }

  return borderClass;
}