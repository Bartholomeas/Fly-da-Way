import styled from 'styled-components';
import breakpoints from 'assets/breakpoints';

export const ResultWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.colors.baseBlue};
  overflow-y: scroll;

  @media only screen and (${breakpoints.device.m}) {
    /* width: 70%; */
    column-count: 2;
  }
`;

export const ColorWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.baseBlue};
`;
