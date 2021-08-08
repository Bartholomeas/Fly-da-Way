import React, { useState } from 'react';
import { InputWrapper, FormWrapper } from './InputSection.styles';
import FormField from 'components/molecules/Formfield/Formfield';
import { Button } from 'components/atoms/Button/Button';
import axios from 'axios';
import { Logo } from 'components/atoms/Logo/Logo';
import InfoButton from 'components/atoms/InfoButton/InfoButton';
import useModal from 'hooks/useModal';
import Modal from 'components/organisms/Modal/Modal';

const InputSection = ({ setFlyQuotes, setFlightInfos }) => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  const [flightFormValues, setFlightFormValues] = useState({
    from: 'WRO',
    to: 'LHR',
    currency: 'PLN',
    date: 'anytime',
  });

  const options = {
    method: 'GET',
    url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/PL/${flightFormValues.currency}/pl-PL/${flightFormValues.from}-sky/${flightFormValues.to}-sky/${flightFormValues.date}`,
    params: { inboundpartialdate: 'anytime' },
    headers: {
      'x-rapidapi-key': '8cf603764fmsh08c508df54e2a87p10f73ejsnf84f841e1df9',
      'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
    },
  };

  const handleInputChange = (e) => {
    setFlightFormValues({
      ...flightFormValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleApiReq = async (e) => {
    e.preventDefault();

    const response = await axios.request(options).catch((err) => {
      console.log(err);
    });

    if (!response) {
      console.log('ERROR!');
      return;
    } else {
      const quotes = response.data.Quotes;
      const data = response.data;
      console.log(data);

      setFlightInfos({
        carriers: data.Carriers,
        places: data.Places,
      });

      setFlyQuotes(quotes);
    }
  };

  return (
    <InputWrapper>
      <Logo />
      <Modal isOpen={isOpen} handleClose={handleCloseModal} />
      <FormWrapper onSubmit={handleApiReq}>
        <FormField
          label="From"
          id="from"
          name="from"
          value={flightFormValues.from}
          placeholder="E.g. WRO (airport)"
          onChange={handleInputChange}
        ></FormField>
        <FormField label="To" id="to" name="to" value={flightFormValues.to} placeholder="E.g. LHR (airport)" onChange={handleInputChange}></FormField>
        <FormField
          label="Currency"
          id="currency"
          name="currency"
          placeholder="E.g. PLN"
          value={flightFormValues.currency}
          onChange={handleInputChange}
        ></FormField>
        <FormField
          label="Date"
          id="date"
          name="date"
          value={flightFormValues.date}
          placeholder="rrrr-mm-dd / anytime"
          onChange={handleInputChange}
        ></FormField>
        <Button type="submit">Search</Button>
      </FormWrapper>
      <InfoButton onClick={handleOpenModal} />
    </InputWrapper>
  );
};

export default InputSection;
