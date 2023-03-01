import { PhotoDto } from '../photo.model';
import { Photo } from '../photo.model';
import { PhotoAdapter } from './photo-adapter';

describe('PhotoAdapter', () => {
  let adapter: PhotoAdapter;

  beforeEach(() => {
    adapter = new PhotoAdapter();
  });

  it('should convert a PhotoDto to a Photo', () => {
    const dto: Partial<PhotoDto> = {
      id: '123',
      alt_description: 'A beautiful sunset',
      urls: {
        full: 'https://example.com/sunset.jpg',
        small: 'https://example.com/sunset_small.jpg',
        raw: 'https://example.com/sunset_raw.jpg',
        regular: 'https://example.com/sunset_regular.jpg',
        small_s3: 'https://example.com/sunset_small_s3.jpg',
        thumb: 'https://example.com/sunset_thumb.jpg',
      }
    };

    const expectedPhoto = new Photo('123', 'https://example.com/sunset.jpg', 'A beautiful sunset', 'https://example.com/sunset_small.jpg',)

    const actualPhoto = adapter.adapt(dto as PhotoDto);

    expect(actualPhoto).toEqual(expectedPhoto);
  });
});
