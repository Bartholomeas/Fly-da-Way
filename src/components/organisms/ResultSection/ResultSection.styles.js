import styled from 'styled-components';
import breakpoints from 'assets/breakpoints';

export const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  min-height: 35vh;
  padding: 3rem 2rem;
  background-color: ${({ theme }) => theme.colors.baseBlue};
  /* overflow-y: scroll; */

  @media only screen and (${breakpoints.device.m}) {
    min-height: 100vh;
    flex-direction: row;
    column-count: 2;
  }
`;

export const FillInfo = styled.h1`
  position: absolute;
  color: #fff;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.l};
  @media only screen and (${breakpoints.device.m}) {
    left: 60%;
    transform: translateX(-50%);
  }
`;

export const ResultInfo = styled.p`
  align-self: center;
  justify-content: center;
  padding: 0.6rem;
  margin-bottom: 5rem;
  border-radius: 3px;
  background-color: #fff9;
  color: ${({ theme }) => theme.colors.baseBlue};
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  flex-basis: 100%;
`;
