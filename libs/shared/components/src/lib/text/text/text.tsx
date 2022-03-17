import styled from '@emotion/styled';
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

const StyledText = styled.div<{ fontType: FontType }>`
  font-family: ${({ fontType }) => fontTypeToFont[fontType]};
  letter-spacing: -0.5px;
  color: ${colors.gray900};
`;

export function RNText({ fontType = 'REGULAR', ...props }: TextProps) {
  return <StyledText fontType={fontType} {...props} />;
}

export default RNText;
