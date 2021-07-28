import React from 'react';
import axios from 'axios';
import { GlobalStyle } from '../assets/GlobalStyle';
import { InputSection } from 'components/organisms/InputSection/InputSection';

const App = () => {
  const options = {
    method: 'GET',
    url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/PL/PLN/pl-PL/SFO-sky/LAX-sky/anytime',
    params: { inboundpartialdate: 'anytime' },
    headers: {
      'x-rapidapi-key': '8cf603764fmsh08c508df54e2a87p10f73ejsnf84f841e1df9',
      'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  return (
    <div>
      <GlobalStyle />
      <InputSection />
    </div>
  );
};

export default App;
