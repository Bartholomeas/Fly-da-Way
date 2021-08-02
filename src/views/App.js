/* eslint-disable no-unused-vars */
import React from 'react';
import InputSection from 'components/organisms/InputSection/InputSection';
import { Wrapper } from './App.styles';
import ResultSection from 'components/organisms/ResultSection/ResultSection';
import AppProvider from 'providers/AppProvider';

// const initialState = [
//   {
//     quoteId: '2',
//     minPrice: '213',
//     direct: false,
//     carrierId: '1090',
//     departureDate: '2021-12-11T00:00:00',
//     destinationId: '65698',
//     originId: '91519',
//   },
// ];

// class Quote {
//   constructor(quote, minPrice, direct, carrierId, departureDate, destinationId, originId) {
//     this.quoteId = quote;
//     this.minPrice = minPrice;
//     this.direct = direct;
//     this.carrierId = carrierId;
//     this.departureDate = departureDate;
//     this.destinationId = destinationId;
//     this.originId = originId;
//   }
// }

// const createQuote = (quote) => {
//   const newQuote = new Quote(
//     quote.QuoteId,
//     quote.MinPrice,
//     quote.Direct,
//     quote.OutboundLeg.CarrierIds[0],
//     quote.OutboundLeg.DepartureDate,
//     quote.DestinationId,
//     quote.OriginId
//   );
//   setInfo((info) => [...info, newQuote]);
// };

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
