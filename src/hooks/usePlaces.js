import React, { useState } from 'react';
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/PL/PLN/pl-PL/',
  params: { query: 'Łódź' },
  headers: {
    'x-rapidapi-key': '8cf603764fmsh08c508df54e2a87p10f73ejsnf84f841e1df9',
    'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
  },
};

const handleApiReq = async (e) => {
  e.preventDefault();

  const response = await axios.request(options).catch((err) => {
    console.log(err);
  });
};

const usePlaces = ({ cityName }) => {};

export default usePlaces;
