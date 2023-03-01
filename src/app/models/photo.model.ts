export class Photo {
  constructor(
    public id: string,
    public url: string,
    public alt: string,
    public smallSizeUrl: string,
  ) {}
}

export class PhotoDto {
  constructor(
    public alt_description: string,
    public blur_hash: string,
    public color: string,
    public created_at: string,
    public current_user_collections: string[],
    public description: string,
    public height: number,
    public id: string,
    public liked_by_user: false,
    public likes: number,
    public links: {},
    public promoted_at: string,
    public sponsorship: string,
    public topic_submissions: {},
    public updated_at: string,
    public urls: PhotoUrls,
    public user: {},
    public width: number,
  ) {}
}

export interface PhotoUrls {
  full: string,
  raw: string,
  regular: string,
  small: string,
  small_s3: string,
  thumb: string,
}
