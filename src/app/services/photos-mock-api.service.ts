import { Injectable } from "@angular/core";
import { Observable, map, of, delay } from "rxjs";
import { PhotoAdapter } from "../models/adapters/photo-adapter";
import { Photo, PhotoDto } from "../models/photo.model";
import { START_PAGE, MAX_PAGE_SIZE } from "./constants/request-params.constants";
import { imagesMockGetResponse } from "./mocks/get-images-mock-response";

@Injectable({
  providedIn: 'root',
})
export class PhotosMockApiService {
  constructor(private adapter: PhotoAdapter) {}

  getPhotos(page = START_PAGE, perPage = MAX_PAGE_SIZE): Observable<Photo[]> {
    return of(imagesMockGetResponse).pipe(
      map((data: PhotoDto[]) => data.map((item) => this.adapter.adapt(item))),
      delay(this.randomDelay())
    );
  }

  private randomDelay(bottom = 200, top = 300) {
    return Math.floor(Math.random() * (1 + top - bottom)) + bottom;
  }
}
