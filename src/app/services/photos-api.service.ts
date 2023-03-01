import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { PhotoAdapter } from '../models/adapters/photo-adapter';
import { Photo, PhotoDto } from '../models/photo.model';
import { MAX_PAGE_SIZE, START_PAGE } from './constants/request-params.constants';
import { RequestOptionsBuilder } from './utils/request-options-builder';

@Injectable({
  providedIn: 'root',
})
export class PhotosApiService {
  private readonly baseUri = 'api.unsplash.com';

  constructor(private http: HttpClient, private adapter: PhotoAdapter) {}

  getPhotos(page = START_PAGE, perPage = MAX_PAGE_SIZE): Observable<Photo[]> {
    const url = `https://${this.baseUri}/photos`;
    const options = new RequestOptionsBuilder()
      .addHeader('Content-Type', 'application/json')
      .addParam('page', page.toString())
      .addParam('per_page', perPage.toString())
      .getOptions();

    return this.http.get<PhotoDto[]>(url, options).pipe(
      map((data: PhotoDto[]) => data.map((item) => this.adapter.adapt(item)))
    );
  }
}
