import styled from 'styled-components';
import breakpoints from 'assets/breakpoints';

export const ResultWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.baseBlue};

  @media only screen and (${breakpoints.device.m}) {
    width: 70%;
  }
`;
