import React from 'react';
import { StyleSheet, Text, TextProps as RNTextProps } from 'react-native';

import { colors } from '@nx-react-code-sharing/shared-styles';

type FontWeight = 'BOLD' | 'MEDIUM' | 'REGULAR';

/* eslint-disable-next-line */
export interface TextProps extends RNTextProps {
  style?: RNTextProps['style'];
  sizeStyle?: RNTextProps['style'];
  fontWeight?: FontWeight;
  children: React.ReactNode;
}

const fontWeightBy: { [key in FontWeight]: string } = {
  BOLD: 'NotoSansKR-Bold',
  MEDIUM: 'NotoSansKR-Medium',
  REGULAR: 'NotoSansKR-Regular',
};

const styles = StyleSheet.create({
  text: {
    letterSpacing: -0.5,
    color: colors.gray900,
  },
});

export function RNText({
  style,
  sizeStyle,
  fontWeight = 'REGULAR',
  ...props
}: TextProps) {
  return <Text style={[style, sizeStyle, styles.text]} {...props} />;
}

export default RNText;
