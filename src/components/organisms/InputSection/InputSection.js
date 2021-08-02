import React, { useState } from 'react';
import { InputWrapper, FormWrapper } from './InputSection.styles';
import FormField from 'components/molecules/Formfield/Formfield';
import { Button } from 'components/atoms/Button/Button';
import axios from 'axios';
import { Logo } from 'components/atoms/Logo/Logo';

const InputSection = ({ setFlyInfo }) => {
  const [formValues, setFormValues] = useState({
    from: 'WRO',
    to: 'LHR',
    currency: 'PLN',
    date: 'anytime',
  });

  const options = {
    method: 'GET',
    url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/PL/${formValues.currency}/pl-PL/${formValues.from}-sky/${formValues.to}-sky/${formValues.date}`,
    params: { inboundpartialdate: 'anytime' },
    headers: {
      'x-rapidapi-key': '8cf603764fmsh08c508df54e2a87p10f73ejsnf84f841e1df9',
      'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
    },
  };

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleApiReq = async (e) => {
    e.preventDefault();

    const response = await axios.request(options);
    const data = response.data.Quotes;

    setFlyInfo(data);
  };

  return (
    <InputWrapper>
      <Logo />
      <FormWrapper onSubmit={handleApiReq}>
        <FormField
          label="From"
          id="from"
          name="from"
          value={formValues.from}
          placeholder="E.g. WRO (airport)"
          onChange={handleInputChange}
        ></FormField>
        <FormField label="To" id="to" name="to" value={formValues.to} placeholder="E.g. LHR (airport)" onChange={handleInputChange}></FormField>
        <FormField
          label="Currency"
          id="currency"
          name="currency"
          placeholder="E.g. PLN"
          value={formValues.currency}
          onChange={handleInputChange}
        ></FormField>
        <FormField
          label="Date"
          id="date"
          name="date"
          value={formValues.date}
          placeholder="rrrr-mm-dd / anytime"
          onChange={handleInputChange}
        ></FormField>
        <Button type="submit">Search</Button>
      </FormWrapper>
    </InputWrapper>
  );
};

export default InputSection;
