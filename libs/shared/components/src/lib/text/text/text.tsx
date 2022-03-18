import React from "react";
import styled from '@emotion/primitives';

import { colors } from '@nx-react-code-sharing/shared-styles';

type FontType = 'BOLD' | 'MEDIUM' | 'REGULAR';

/* eslint-disable-next-line */
export interface TextProps {
  fontType?: FontType;
  children: React.ReactNode;
}

const fontTypeToFont: { [key in FontType]: string } = {
  BOLD: 'NotoSansKR-Bold',
  MEDIUM: 'NotoSansKR-Medium',
  REGULAR: 'NotoSansKR-Regular',
};

const StyledText = styled.Text<{ fontType: FontType }>`
  letter-spacing: -0.5px;
  color: ${colors.gray900};
`;

export function RNText({ fontType = 'REGULAR', ...props }: TextProps) {
  return <StyledText fontType={fontType} {...props} />;
}

export default RNText;
