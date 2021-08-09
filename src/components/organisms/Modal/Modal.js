import React, { useState } from 'react';
import {
  ModalWrapper,
  ButtonWrapper,
  ModalButton,
  InputButton,
  Input,
  ModalHeader,
  ModalList,
  ModalItem,
  ModalAirport,
  ModalNotification,
} from './Modal.styles';
import axios from 'axios';

export const Modal = ({ handleClose, isOpen }) => {
  const [input, setInput] = useState();
  const [airports, setAirports] = useState();

  const options = {
    method: 'GET',
    url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/PL/PLN/en-ENG/',
    params: { query: `${input}` },
    headers: {
      'x-rapidapi-key': '8cf603764fmsh08c508df54e2a87p10f73ejsnf84f841e1df9',
      'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
    },
  };

  const requestIata = async (e) => {
    e.preventDefault();

    const response = await axios.request(options).catch((err) => {
      console.log(err);
    });
    setAirports(response.data.Places);
  };

  const updateInputValue = (e) => {
    setInput(e.target.value);
  };
  return (
    <ModalWrapper appElement={document.getElementById('root')} isOpen={isOpen} onRequestClose={handleClose}>
      <ModalHeader>Search for airports codes</ModalHeader>
      <ModalList>
        {airports ? (
          airports.map((el) => {
            return (
              <ModalItem key={el.PlaceId}>
                {el.CountryName}, {el.PlaceName}:<ModalAirport>{el.PlaceId}</ModalAirport>
              </ModalItem>
            );
          })
        ) : (
          <ModalNotification> We don't see any airports here. 👀</ModalNotification>
        )}
      </ModalList>
      <ButtonWrapper>
        <InputButton>
          <Input onChange={(e) => updateInputValue(e)} placeholder="Country"></Input>
          <ModalButton onClick={(e) => requestIata(e)}>
            <svg width="16" height="16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M98.64 86.4564L79.1659 66.9856C78.287 66.1068 77.0955 65.6186 75.8454 65.6186H72.6616C78.0526 58.7247 81.2559 50.0537 81.2559 40.621C81.2559 18.1818 63.071 0 40.628 0C18.1849 0 0 18.1818 0 40.621C0 63.0602 18.1849 81.2421 40.628 81.2421C50.0623 81.2421 58.7348 78.0393 65.6298 72.6492V75.8324C65.6298 77.0823 66.1181 78.2736 66.9971 79.1524L86.4712 98.6232C88.3072 100.459 91.2762 100.459 93.0927 98.6232L98.6205 93.0964C100.457 91.2606 100.457 88.2922 98.64 86.4564ZM40.628 65.6186C26.8184 65.6186 15.6261 54.4478 15.6261 40.621C15.6261 26.8138 26.7988 15.6235 40.628 15.6235C54.4376 15.6235 65.6298 26.7943 65.6298 40.621C65.6298 54.4283 54.4571 65.6186 40.628 65.6186Z"
                fill="#fff"
              />
            </svg>
          </ModalButton>
        </InputButton>
        <ModalButton isClose onClick={handleClose}>
          Close
        </ModalButton>
      </ButtonWrapper>
    </ModalWrapper>
  );
};

export default Modal;
