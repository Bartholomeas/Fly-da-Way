import styled from 'styled-components';
import breakpoints from 'assets/breakpoints';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  background-color: tomato;
  width: 100%;
  min-height: 100vh;

  @media only screen and (${breakpoints.device.m}) {
    flex-direction: row;
    background-color: gold;
    height: 100vh;
  } ;
`;
