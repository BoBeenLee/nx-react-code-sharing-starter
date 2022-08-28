import React from 'react';
import { Image as RNImage, ImageProps as RNImageProps } from 'react-native';

/* eslint-disable-next-line */
export interface ImageProps extends RNImageProps {
  alt: string;
}

export function Image(props: ImageProps) {
  return <RNImage {...props} />;
}

export default Image;
