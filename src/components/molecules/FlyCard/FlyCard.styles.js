import styled from 'styled-components';
import breakpoints from 'assets/breakpoints';

export const CardBody = styled.div`
  position: relative;
  width: 90%;
  height: 19rem;
  margin-bottom: 2rem;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }

  @media only screen and (${breakpoints.device.m}) {
    width: 49%;
  }
`;

export const TopWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem;
  width: 100%;
`;

export const Time = styled.span`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.ctaColor};
`;

export const InfoWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 10rem;
  margin-left: 1rem;
  margin-bottom: 1rem;
`;

export const Direction = styled.p`
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkerBlue};
`;

export const InfoTitle = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  width: auto;
  margin: 0;
  color: ${({ theme }) => theme.colors.fontColor};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

export const InfoContent = styled.span`
  font-weight: normal;
  margin-left: 0.6rem;
`;

export const PriceTag = styled.span`
  position: absolute;
  border-radius: 3px;
  bottom: 1rem;
  right: 1rem;
  padding: 0.4rem;
  color: #fff;
  /* font-size: ${({ theme }) => theme.fontSize.xs}; */
  background-color: ${({ theme }) => theme.colors.ctaColor};
  font-weight: bold;

  @media only screen and (${breakpoints.device.m}) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const Plane = styled.svg`
  position: absolute;
  opacity: 0.1;
  height: 15rem;
  width: auto;
  left: 2rem;
  top: 2.5rem;
`;
