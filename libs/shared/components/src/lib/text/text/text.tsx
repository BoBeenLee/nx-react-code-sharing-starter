import React from "react";
import styled from '@emotion/primitives';
import colors from 'libs/shared/styles/src/lib/colors';

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
  /* font-family: ${({ fontType }) => fontTypeToFont[fontType]}; TODO 폰트 설정 */
  letter-spacing: -0.5px;
  color: ${colors.gray900};
`;

export function RNText({ fontType = 'REGULAR', ...props }: TextProps) {
  return <StyledText fontType={fontType} {...props} />;
}

export default RNText;
