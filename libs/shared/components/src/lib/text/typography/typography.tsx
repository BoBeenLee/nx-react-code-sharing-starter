import styled from '@emotion/styled';

import RNText, { TextProps } from '../text/text';

const Bold = (props: TextProps) => <RNText fontType={'BOLD'} {...props} />;
const Medium = (props: TextProps) => <RNText fontType={'MEDIUM'} {...props} />;
const Regular = (props: TextProps) => (
  <RNText fontType={'REGULAR'} {...props} />
);

export const Bold8 = styled(Bold)`
  font-size: 8px;
  line-height: 12px;
`;

export const Bold10 = styled(Bold)`
  font-size: 10px;
  line-height: 15px;
`;

export const Bold12 = styled(Bold)`
  font-size: 12px;
  line-height: 18px;
`;

export const Bold13 = styled(Bold)`
  font-size: 13px;
  line-height: 18px;
`;

export const Bold14 = styled(Bold)`
  font-size: 14px;
  line-height: 20px;
`;

export const Bold15 = styled(Bold)`
  font-size: 15px;
  line-height: 22px;
`;

export const Bold16 = styled(Bold)`
  font-size: 16px;
  line-height: 24px;
`;

export const Bold18 = styled(Bold)`
  font-size: 18px;
  line-height: 26px;
`;

export const Bold19 = styled(Bold)`
  font-size: 19px;
  line-height: 26px;
`;

export const Bold20 = styled(Bold)`
  font-size: 20px;
  line-height: 26px;
`;

export const Medium7 = styled(Medium)`
  font-size: 7px;
  line-height: 12px;
`;

export const Medium8 = styled(Medium)`
  font-size: 8px;
  line-height: 12px;
`;

export const Medium10 = styled(Medium)`
  font-size: 10px;
  line-height: 15px;
`;

export const Medium12 = styled(Medium)`
  font-size: 12px;
  line-height: 18px;
`;

export const Medium14 = styled(Medium)`
  font-size: 14px;
  line-height: 20px;
`;

export const Medium15 = styled(Medium)`
  font-size: 15px;
  line-height: 22px;
`;

export const Medium16 = styled(Medium)`
  font-size: 16px;
  line-height: 24px;
`;

export const Medium20 = styled(Medium)`
  font-size: 20px;
  line-height: 26px;
`;

export const Regular10 = styled(Regular)`
  font-size: 10px;
  line-height: 15px;
`;

export const Regular12 = styled(Regular)`
  font-size: 12px;
  line-height: 18px;
`;

export const Regular14 = styled(Regular)`
  font-size: 14px;
  line-height: 20px;
`;

export const Regular15 = styled(Regular)`
  font-size: 15px;
  line-height: 22px;
`;

export const Regular16 = styled(Regular)`
  font-size: 16px;
  line-height: 24px;
`;

export const Regular20 = styled(Regular)`
  font-size: 20px;
  line-height: 26px;
`;
