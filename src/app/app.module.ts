import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule, XHRBackend, RequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumCardComponent } from './album-card/album-card.component';
import { AlbumsService } from './albums.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AlbumListComponent,
    AlbumCardComponent
  ],
  imports: [
    BrowserModule, HttpModule, HttpClientModule
  ],
  providers: [HttpClient, AlbumsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
