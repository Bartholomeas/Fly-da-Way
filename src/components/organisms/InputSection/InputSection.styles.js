import styled from 'styled-components';
import breakpoints from 'assets/breakpoints';

export const InputWrapper = styled.div`
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 0 0 2rem 0;
  background-color: ${({ theme }) => theme.colors.baseLight};
  overflow-y: hidden;

  @media only screen and (${breakpoints.device.m}) {
    width: 30vw;
    height: 100vh;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 90%;
`;
