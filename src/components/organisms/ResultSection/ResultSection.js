import React from 'react';
import { ResultWrapper, FillInfo } from './ResultSection.styles';
import FlyCard from 'components/molecules/FlyCard/FlyCard';

const ResultSection = ({ flyQuotes, flightInfos }) => {
  console.log(flightInfos);
  return (
    <ResultWrapper>
      {flyQuotes.length > 0 ? (
        flyQuotes.map((card) => {
          return (
            <FlyCard
              key={card.QuoteId}
              from={card.OutboundLeg.OriginId}
              to={card.OutboundLeg.DestinationId}
              price={card.MinPrice}
              depDate={card.OutboundLeg.DepartureDate}
              direct={card.Direct}
              // carrierId={
              //   flightInfos.carriers.forEach((carrier) => console.log(card))
              //   // card.OutboundLeg.CarrierIds[0]
              // }
            />
          );
        })
      ) : (
        <FillInfo>
          Fill required fields <br /> and search for your results.
        </FillInfo>
      )}
    </ResultWrapper>
  );
};

export default ResultSection;

// card.OutboundLeg.CarrierIds[0]
