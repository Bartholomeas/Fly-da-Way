import styled from 'styled-components';
import ReactModal from 'react-modal';
import { Button } from 'components/atoms/Button/Button';
import breakpoints from 'assets/breakpoints';

export const ModalWrapper = styled(ReactModal)`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  top: 50%;
  left: 50%;
  padding: 2rem;
  transform: translate(-50%, -50%);
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.lightGrey};

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.baseBlue};
  }

  @media only screen and (${breakpoints.device.m}) {
    height: 70%;
    width: 50%;
  }
`;

export const ModalHeader = styled.h1`
  margin: 0;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.baseBlue};
`;

export const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  bottom: 0;
`;

export const ModalButton = styled(Button)`
  margin: 0;
  background-color: ${({ isClose, theme: { colors } }) => (isClose ? 'transparent' : colors.darkerBlue)};
  color: ${({ isClose, theme: { colors } }) => (isClose ? colors.darkerBlue : '#fff')};

  &:nth-child(1) {
    height: 5rem;
    z-index: 100;
  }
`;

export const InputButton = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  margin-right: 2rem;
`;

export const Input = styled.input`
  text-align: center;
  margin: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

export const ModalList = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem;
  width: 100%;
  height: 70%;
  background-color: ${({ theme }) => theme.colors.baseLight};
  overflow-y: auto;
`;
export const ModalAirport = styled.span`
  margin-left: 1rem;
  color: ${({ theme }) => theme.colors.fontColor};
  font-weight: bold;
`;

export const ModalItem = styled.p`
  color: ${({ theme }) => theme.colors.fontColor};
`;

export const ModalNotification = styled.p`
  width: 50%;
  align-self: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.fontColor};
`;
