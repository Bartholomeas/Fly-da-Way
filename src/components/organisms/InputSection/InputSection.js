import React from 'react';
import { InputWrapper, FormWrapper } from './InputSection.styles';
import FormField from 'components/molecules/Formfield/Formfield';
import { Button } from 'components/atoms/Button/Button';
import { Logo } from 'components/atoms/Logo/Logo';
const InputSection = () => {
  const labels = ['From', 'To', 'Currency', 'Locale', 'Date', 'Country'];

  return (
    <InputWrapper>
      <Logo />
      <FormWrapper>
        {labels.map((label, id) => (
          <FormField key={id} label={label} id={label}></FormField>
        ))}
      </FormWrapper>
      <Button>Search</Button>
    </InputWrapper>
  );
};

export default InputSection;
