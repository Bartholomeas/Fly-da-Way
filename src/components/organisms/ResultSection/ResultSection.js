import React, { useState, useEffect } from 'react';
import { ResultWrapper, FillInfo, ResultInfo } from './ResultSection.styles';
import FlyCard from 'components/molecules/FlyCard/FlyCard';

const ResultSection = ({ flyQuotes, flightInfos }) => {
  const [currTime, setCurrTime] = useState(0);
  useEffect(() => {
    setCurrTime(new Date());
  }, []);

  let carrierName;
  const checkCarrier = (card) => {
    flightInfos.carriers.forEach((carrier) => {
      if (card.OutboundLeg.CarrierIds[0] === carrier.CarrierId) {
        carrierName = carrier.Name;
      }
    });
  };

  let fromName;
  const checkOrigin = (card) => {
    flightInfos.places.forEach((place) => {
      if (card.OutboundLeg.OriginId === place.PlaceId) {
        fromName = place.Name;
      }
    });
  };

  let toName = [];
  const checkDestination = (card) => {
    flightInfos.places.forEach((place) => {
      if (card.OutboundLeg.DestinationId === place.PlaceId) {
        toName = place.Name;
      }
    });
  };

  let cardArray = [];
  const toggleActive = (e) => {
    if (e.currentTarget.classList.contains('active')) {
      cardArray.forEach((card) => card.classList.remove('active'));
      return;
    }
    cardArray.push(e.currentTarget);
    cardArray.forEach((card) => card.classList.remove('active'));

    e.currentTarget.classList.add('active');
  };

  return (
    <ResultWrapper>
      {flyQuotes.length > 0 ? <ResultInfo>Press card for more info</ResultInfo> : null}
      {flyQuotes.length > 0 ? (
        flyQuotes.map((card) => {
          checkCarrier(card);
          checkOrigin(card);
          checkDestination(card);

          return (
            <FlyCard
              onClick={(e) => toggleActive(e)}
              key={card.QuoteId}
              from={fromName}
              to={toName}
              price={card.MinPrice}
              depDate={card.OutboundLeg.DepartureDate}
              direct={card.Direct}
              carrierId={carrierName}
              time={currTime}
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
