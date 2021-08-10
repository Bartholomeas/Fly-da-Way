import React, { useState } from 'react';

export const useResults = ({ flightInfos }) => {
  const [cardInfos, setCardInfos] = useState({});

  const checkCarrierr = (card) => {
    flightInfos.carriers.forEach((carrier) => {
      if (card.OutboundLeg.CarrierIds[0] === carrier.CarrierId) {
        let carrierName = carrier.Name;
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
  console.log(cardInfos);

  return {
    checkCarrierr,
    checkOrigin,
    checkDestination,
    toggleActive,
  };
};
