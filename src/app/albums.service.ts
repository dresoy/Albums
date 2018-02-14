import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Album } from './album';

@Injectable()
export class AlbumsService {

  constructor(private http: HttpClient) { }

  GetAll(): Observable<Album[]> {
    return this.http.get<any | Album[]>('https://jsonplaceholder.typicode.com/photos');
  }

}
