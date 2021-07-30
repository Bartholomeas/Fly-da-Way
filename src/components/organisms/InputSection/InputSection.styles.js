import styled from 'styled-components';
import breakpoints from 'assets/breakpoints';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 3rem 0;
  background-color: ${({ theme }) => theme.colors.baseLight};

  @media only screen and (${breakpoints.device.m}) {
    width: 30%;
    /* height: 100%; */
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 65%;
  box-flex-group: skyblue;
`;
