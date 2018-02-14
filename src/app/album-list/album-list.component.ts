import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Album } from '../album';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {

  albumList: Album[];
  loading = true;

  constructor(private as: AlbumsService) { }

  ngOnInit() {
    this.as.GetAll().subscribe(
      result => this.getSingleSuccess(result),
      (errorData: HttpErrorResponse) => this.httpError(errorData),
      () => this.httpEnd()
    );
  }

  private getSingleSuccess(list: Album[]) {
    const smallerList = list.slice(list.length - 4, list.length - 1);
    this.albumList = smallerList.reverse();
  }

  private httpError(err: HttpErrorResponse): void {
    console.log(err.message);
  }

  private httpEnd() {
    this.loading = false;
  }

}
