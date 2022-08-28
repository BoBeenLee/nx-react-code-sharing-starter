import { getKeys } from '@nx-react-code-sharing/shared-utils';

let prefix = '';

export const setImagePrefixPath = (newPrefix: string) => {
  prefix = newPrefix;
};

const withPrefixPath = <T extends keyof U, U extends { [key in T]: string }>(
  imageKeys: T[],
  images: U
): U => {
  return imageKeys.reduce((res, curr) => {
    return {
      ...res,
      [curr]: `${prefix}${images[curr]}`,
    };
  }, images);
};

export const getImages = () => {
  const iconImages = {
    storybook: '/assets/storybook.png',
  };
  const iconImageKeys = getKeys(iconImages);

  return {
    iconImages: withPrefixPath(iconImageKeys, iconImages),
  };
};
