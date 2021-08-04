import styled from 'styled-components';
import breakpoints from 'assets/breakpoints';

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
`;

export const InfoWrapper = styled.div`
  /* position: absolute; */
  display: none;
  flex-direction: column;
  /* justify-content: space-between; */
  /* align-items: flex-start; */
  bottom: 0;
  height: 100%;
  width: 100%;
  margin-left: 1rem;
  margin-bottom: 1rem;
  background-color: orange;
`;

export const Direction = styled.p`
  margin: 0;
  font-size: 2.6rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkerBlue};
`;

export const InfoTitle = styled.span`
  position: relative;
  display: flex;
  flex-direction: ${({ attention }) => (attention ? 'column' : 'row')};
  align-items: flex-end;
  width: auto;
  margin: 0;
  color: ${({ attention, theme: { colors } }) => (attention ? colors.ctaColor : colors.fontColor)};
  font-weight: bold;
  white-space: nowrap;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

export const Date = styled.span`
  font-weight: normal;
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
  background-color: ${({ theme }) => theme.colors.ctaColor};
  font-weight: bold;

  @media only screen and (${breakpoints.device.m}) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const CarrierSign = styled.p`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  height: 3rem;
  bottom: 1rem;
  left: 1rem;
  opacity: 0.3;
  color: ${({ theme }) => theme.colors.baseBlue};
  font-size: 4rem;
  font-weight: bold;

  @media only screen and (${breakpoints.device.m}) {
    font-size: 5rem;
    height: 4rem;
  }
  @media only screen and (${breakpoints.device.l}) {
    font-size: 6.5rem;
    height: 5rem;
  }
`;

export const CardBody = styled.div`
  position: relative;
  width: 90%;
  height: 15rem;
  margin-bottom: 2rem;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.02);
  }

  &.active {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 20rem;
    transform: translate(-50%, -50%);
    transform-origin: left;
    z-index: 1000;
    background-color: #e0ecf6;

    & ${InfoWrapper} {
      display: flex;
    }
  }

  @media only screen and (${breakpoints.device.m}) {
    width: 49%;
  }
`;
