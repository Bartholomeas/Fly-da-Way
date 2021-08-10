import styled from 'styled-components';
import breakpoints from 'assets/breakpoints';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0;
  overflow: hidden;

  @media only screen and (${breakpoints.device.m}) {
    flex-direction: row;
  } ;
`;
