import React from 'react';
import styled from '@emotion/primitives';


/* eslint-disable-next-line */
export interface XEIconProps {}

const StyledXEIcon = styled.Text`
  color: pink;
`;

type TestType = NoUndefinedField<{ a?: string }>;

export function XEIcon(props: XEIconProps) {
  return <StyledXEIcon>XEIcon</StyledXEIcon>;
}

export default XEIcon;
