import styled from '@emotion/styled';
import { Bold20 } from '@nx-react-code-sharing/shared-components';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.@emotion/styled file.
   */
  return (
    <StyledPage>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <Bold20>
              <span> Hello there, </span>
              Welcome nx-react-code-sharing 👋
            </Bold20>
          </div>
        </div>
      </div>
    </StyledPage>
  );
}

export default Index;
