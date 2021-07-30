import styled from 'styled-components';
import breakpoints from 'assets/breakpoints';

export const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.colors.baseBlue};
  overflow-y: scroll;

  @media only screen and (${breakpoints.device.m}) {
    flex-direction: row;
    column-count: 2;
  }
`;

export const ColorWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.baseBlue};
`;
