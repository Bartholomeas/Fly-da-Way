import styled from 'styled-components';

export const Input = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 3px;
  width: 100%;
  border: none;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;
