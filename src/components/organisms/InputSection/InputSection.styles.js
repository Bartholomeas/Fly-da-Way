import styled from 'styled-components';
import breakpoints from 'assets/breakpoints';

export const InputWrapper = styled.div`
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 2rem 0;
  background-color: ${({ theme }) => theme.colors.baseLight};
  overflow-y: hidden;

  @media only screen and (${breakpoints.device.m}) {
    width: 30%;
    height: 100vh;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 90%;
`;
