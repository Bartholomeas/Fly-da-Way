import styled from 'styled-components';
// import 'assets/fonts.css';

export const Button = styled.button`
  padding: 1rem 2.4rem;
  margin: 2rem 0;
  color: #ffffff;
  background-color: ${({ theme }) => theme.colors.darkerBlue};
  border-radius: 3px;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.l};
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.baseBlue};
  }
`;
