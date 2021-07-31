import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InputSection from 'components/organisms/InputSection/InputSection';
import { Wrapper } from './App.styles';
import ResultSection from 'components/organisms/ResultSection/ResultSection';
import AppProvider from 'providers/AppProvider';

const App = () => {
  const [info, setInfo] = useState([]);

  const options = {
    method: 'GET',
    url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/PL/PLN/pl-PL/SFO-sky/LAX-sky/anytime',
    params: { inboundpartialdate: 'anytime' },
    headers: {
      'x-rapidapi-key': '8cf603764fmsh08c508df54e2a87p10f73ejsnf84f841e1df9',
      'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
    },
  };

  useEffect(() => {
    (async () => {
      // const response = await axios.request(options);
      const response = await axios.request(options);
      console.log(response);
    })();
  }, [options]);

  // axios
  //   .request(options)
  //   .then(function (response) {
  //     console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });

  return (
    <AppProvider>
      <Wrapper>
        <InputSection />
        <ResultSection />
      </Wrapper>
    </AppProvider>
  );
};

export default App;
