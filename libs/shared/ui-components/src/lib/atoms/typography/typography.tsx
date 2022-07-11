import { getKeys } from '@nx-react-code-sharing/shared-utils';
import React from 'react';
import { StyleSheet } from 'react-native';

import RNText, { TextProps } from '../text/text';

type FilterFontTypeTextProps = Omit<TextProps, 'fontWeight' | 'sizeStyle'>;

const styles = StyleSheet.create({
  size8: {
    fontSize: 8,
    lineHeight: 12,
  },
  size10: {
    fontSize: 10,
    lineHeight: 15,
  },
  size12: {
    fontSize: 12,
    lineHeight: 18,
  },
  size13: {
    fontSize: 13,
    lineHeight: 18,
  },
  size14: {
    fontSize: 14,
    lineHeight: 20,
  },
  size15: {
    fontSize: 15,
    lineHeight: 22,
  },
  size16: {
    fontSize: 16,
    lineHeight: 24,
  },
  size18: {
    fontSize: 18,
    lineHeight: 26,
  },
  size19: {
    fontSize: 19,
    lineHeight: 26,
  },
  size20: {
    fontSize: 20,
    lineHeight: 26,
  },
});

const sizeKeys = getKeys(styles);
type SizeKeys = keyof typeof styles extends `size${infer K}` ? K : never;

export const Bold = sizeKeys.reduce((res, key) => {
  return {
    ...res,
    [`Bold${key.replace('size', '')}`]: (props: FilterFontTypeTextProps) => (
      <RNText sizeStyle={styles[key]} fontWeight={'BOLD'} {...props} />
    ),
  };
}, {} as Record<`Bold${SizeKeys}`, (props: FilterFontTypeTextProps) => JSX.Element>);


export const Medium = sizeKeys.reduce((res, key) => {
  return {
    ...res,
    [`Medium${key.replace('size', '')}`]: (props: FilterFontTypeTextProps) => (
      <RNText sizeStyle={styles[key]} fontWeight={'MEDIUM'} {...props} />
    ),
  };
}, {} as Record<`Medium${SizeKeys}`, (props: FilterFontTypeTextProps) => JSX.Element>);

export const Regular = sizeKeys.reduce((res, key) => {
  return {
    ...res,
    [`Regular${key.replace('size', '')}`]: (props: FilterFontTypeTextProps) => (
      <RNText sizeStyle={styles[key]} fontWeight={'REGULAR'} {...props} />
    ),
  };
}, {} as Record<`Regular${SizeKeys}`, (props: FilterFontTypeTextProps) => JSX.Element>);
