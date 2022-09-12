import { setImagePrefixPath, getImages } from './images';

describe('Images', () => {
  it('prefix 이미지 설정', () => {
    setImagePrefixPath('/test');
    expect(getImages().iconImages.storybook).toBe('/test/assets/storybook.png');
  });
});
