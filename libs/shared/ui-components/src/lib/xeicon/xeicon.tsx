import React from 'react';
import { StyleSheet, Text } from 'react-native';

/* eslint-disable-next-line */
export interface XEIconProps {}

const styles = StyleSheet.create({
  xeicon: {
    color: 'pink',
  },
});

export function XEIcon(props: XEIconProps) {
  return <Text style={styles.xeicon}>XEIcon</Text>;
}

export default XEIcon;
