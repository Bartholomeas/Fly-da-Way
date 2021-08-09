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

export const InfoWrapper = styled.div`
  display: none;
  position: absolute;
  flex-direction: column;
  flex-wrap: wrap;
  bottom: 0;
  width: 20rem;
  margin-left: 1rem;
  margin-bottom: 1rem;
`;

export const Direction = styled.p`
  position: absolute;
  margin-left: 1rem;
  margin-top: 1rem;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkerBlue};

  @media only screen and (${breakpoints.device.xs}) {
    transform: translateX(-50%);
    margin-left: 0;
    left: 50%;
    font-size: 2.6rem;
  }
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
  width: 100%;
  height: 13rem;
  margin-bottom: 2rem;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  &.active {
    /* position: fixed;
    top: 50%;
    left: 50%;
    height: 20rem;
    width: 50rem;
    transform: translate(-50%, -50%);
    transform-origin: left;
    z-index: 1000; */
    /* flex-grow: 10; */
    /* width: 60%; */
    height: 15rem;
    background-color: #e0ecf6;

    & ${InfoWrapper} {
      display: flex;
    }
  }
`;

export const Timeline = styled.span`
  position: relative;
  margin: 0 2rem;
  color: ${({ theme }) => theme.colors.darkerBlue};
  font-size: ${({ theme }) => theme.fontSize.s};

  &::after {
    content: '';
    position: absolute;
    width: 5rem;
    height: 2px;
    top: 0;
    left: 0;
    transform: translateX(-20%);
    background-color: ${({ theme }) => theme.colors.baseBlue};
  }
`;

export const TimeInfo = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0;
  top: 1rem;
  right: 1rem;
  color: ${({ theme }) => theme.colors.ctaColor};
  font-weight: bold;
  white-space: nowrap;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

export const Date = styled.span`
  font-weight: normal;
  font-size: ${({ theme }) => theme.fontSize.s};
`;
export const Time = styled.span`
  font-size: 1.6rem;
`;
