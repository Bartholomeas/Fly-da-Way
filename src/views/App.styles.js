import styled from 'styled-components';
import breakpoints from 'assets/breakpoints';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* min-height: 100vh; */
  height: 3000px;
  margin: 0;
  overflow-y: scroll;

  @media only screen and (${breakpoints.device.m}) {
    flex-direction: row;
    height: 100vh;
  } ;
`;
