import React from 'react';
import { CardBody, CarrierSign, Time, Date, Direction, InfoTitle, PriceTag, InfoContent, InfoWrapper, Timeline, TimeInfo } from './FlyCard.styles';

const FlyCard = ({ from, to, price, depDate, direct, carrierId, flightHour, onClick, depTime }) => {
  return (
    <CardBody onClick={onClick}>
      <Direction>
        {from.slice(0, 4).toUpperCase()} <Timeline>2:{Math.floor(Math.random() * 60)}h</Timeline> {to.slice(0, 4).toUpperCase()}
      </Direction>
      <TimeInfo>
        <Time>at {depTime.slice(11, 16)}</Time>
        <Date>{depDate.slice(0, 10)}</Date>
      </TimeInfo>
      <CarrierSign>{carrierId}</CarrierSign>
      <InfoWrapper>
        <InfoTitle>
          Origin: <InfoContent>{from}</InfoContent>
        </InfoTitle>
        <InfoTitle>
          Destination: <InfoContent>{to}</InfoContent>
        </InfoTitle>
        <InfoTitle>
          Direct: <InfoContent>{direct ? '⩗' : 'X'}</InfoContent>
        </InfoTitle>
        <InfoTitle>
          Departure date: <InfoContent>{depDate.slice(0, 10)}</InfoContent>
        </InfoTitle>
        <InfoTitle>
          Time: <InfoContent>{flightHour}</InfoContent>
        </InfoTitle>
      </InfoWrapper>
      <PriceTag>{price}zł</PriceTag>
    </CardBody>
  );
};

export default FlyCard;
