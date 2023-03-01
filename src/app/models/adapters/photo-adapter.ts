import { PhotoDto } from '../photo.model';
import { Injectable } from "@angular/core";
import { Photo } from "../photo.model";
import { Adapter } from "./adapter";

@Injectable({
  providedIn: "root",
})
export class PhotoAdapter implements Adapter<Photo> {
  adapt(photoDto: PhotoDto): Photo {
    return new Photo(photoDto.id, photoDto.urls.full, photoDto.alt_description, photoDto.urls.small);
  }
}
