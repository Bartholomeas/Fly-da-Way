import React from 'react';
import { Label } from 'components/atoms/Label/Label';
import { Input } from 'components/atoms/Input/Input';
import styled from 'styled-components';
import breakpoints from 'assets/breakpoints';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  height: 100%;
  width: 25rem;

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    width: 20rem;
  }
`;

const FormField = ({ onChange, label, name, id, value, placeholder = '', type = 'text' }) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input type={type} id={id} name={name} value={value} placeholder={placeholder} onChange={onChange}></Input>
    </Wrapper>
  );
};

export default FormField;
