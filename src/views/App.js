/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import InputSection from 'components/organisms/InputSection/InputSection';
import { Wrapper } from './App.styles';
import ResultSection from 'components/organisms/ResultSection/ResultSection';
import AppProvider from 'providers/AppProvider';

/*
quote: quote.QuoteId,
minPrice: quote.MinPrice,
direct: quote.Direct,
carrierId: quote.OutBoundLeg.CarrierId[0],
departureDate: quote.OutBoundLeg.DepartureDate,
destinationId: quote.OutBoundLeg.DestinationId,
originId: quote.OutBoundLeg.OriginId
*/

const App = () => {
  const [flyInfo, setFlyInfo] = useState([]);
  return (
    <AppProvider>
      <Wrapper>
        <InputSection setFlyInfo={setFlyInfo} />
        <ResultSection flyInfo={flyInfo} />
      </Wrapper>
    </AppProvider>
  );
};

export default App;
