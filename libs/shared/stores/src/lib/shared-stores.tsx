import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface SharedStoresProps {}

const StyledSharedStores = styled.div`
  color: pink;
`;

export function SharedStores(props: SharedStoresProps) {
  return (
    <StyledSharedStores>
      <h1>Welcome to SharedStores!</h1>
    </StyledSharedStores>
  );
}

export default SharedStores;
