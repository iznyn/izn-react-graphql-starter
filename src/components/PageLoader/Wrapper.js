/**
 * components/AppLoader/Wrapper.js
 */
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;

  ._spinner {
    margin: 0 auto;
  }
`;

export default Wrapper;
