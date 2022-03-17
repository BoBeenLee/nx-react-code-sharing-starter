import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface XEIconProps {}

const StyledXEIcon = styled.div`
  color: pink;
`;

export function XEIcon(props: XEIconProps) {
  return (
    <StyledXEIcon>
      <h1>Welcome to XEIcon!</h1>
    </StyledXEIcon>
  );
}

export default XEIcon;
