import React from 'react';
import { ResultWrapper, FillInfo, ResultInfo } from './ResultSection.styles';
import FlyCard from 'components/molecules/FlyCard/FlyCard';

const ResultSection = ({ flyQuotes, flightInfos }) => {
  console.log(flightInfos);

  return (
    <ResultWrapper>
      <ResultInfo>Press card for more info</ResultInfo>
      {flyQuotes.length > 0 ? (
        flyQuotes.map((card) => {
          let carrierName;
          // eslint-disable-next-line no-unused-vars
          const cardCarrier = flightInfos.carriers.forEach((carrier) => {
            if (card.OutboundLeg.CarrierIds[0] === carrier.CarrierId) {
              carrierName = carrier.Name;
            }
          });
          console.log(card);

          return (
            <FlyCard
              key={card.QuoteId}
              from={card.OutboundLeg.OriginId}
              to={card.OutboundLeg.DestinationId}
              price={card.MinPrice}
              depDate={card.OutboundLeg.DepartureDate}
              direct={card.Direct}
              carrierId={carrierName}
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
