import styled from 'styled-components';

const Loading = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .tip {
    font-size: 1.4rem;
    font-weight: 800;
  }
`;
export default Loading;
