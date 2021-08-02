import React from 'react';
import { ResultWrapper, FillInfo } from './ResultSection.styles';
import FlyCard from 'components/molecules/FlyCard/FlyCard';

const ResultSection = ({ flyInfo }) => {
  console.log(flyInfo);

  // {flyInfo.map((card) => {
  //   <FlyCard
  //     from={card.OutboundLeg.OriginId}
  //     to={card.OutboundLeg.DestinationId}
  //     price={card.MinPrice}
  //     depDate={card.OutboundLeg.DepartureDate}
  //     direct={card.Direct}
  //     carrierId={card.OutboundLeg.CarrierIds[0]}
  //   />;
  // })}

  return (
    <ResultWrapper>
      {flyInfo.length > 0 ? (
        flyInfo.map((card) => {
          return (
            <FlyCard
              key={card.QuoteId}
              from={card.OutboundLeg.OriginId}
              to={card.OutboundLeg.DestinationId}
              price={card.MinPrice}
              depDate={card.OutboundLeg.DepartureDate}
              direct={card.Direct}
              carrierId={card.OutboundLeg.CarrierIds[0]}
            />
          );
        })
      ) : (
        <FillInfo>
          Fill in the required fields <br /> and search for your results.
        </FillInfo>
      )}
    </ResultWrapper>
  );
};

export default ResultSection;
