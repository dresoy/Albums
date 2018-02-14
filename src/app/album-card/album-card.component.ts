import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../album';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {

  @Input() data: Album;

  constructor() { }

  ngOnInit() {
  }

}
