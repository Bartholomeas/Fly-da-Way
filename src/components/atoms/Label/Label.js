import styled from 'styled-components';

export const Label = styled.label`
  font-family: 'Poppins', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.l};
  text-align: center;
  color: ${({ theme }) => theme.colors.fontColor};
`;
