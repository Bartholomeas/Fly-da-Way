import React, { useState } from 'react';
import { CardBody, CarrierSign, TopWrapper, Time, Date, Direction, InfoTitle, PriceTag, InfoContent, InfoWrapper } from './FlyCard.styles';

const FlyCard = ({ from, to, price, depDate, direct, carrierId, time, flightHour, onClick }) => {
  const [flyTime, setFlyTime] = useState({});
  const year = depDate.slice(0, 4);
  const month = depDate.slice(5, 7);
  const day = depDate.slice(8, 10);
  const cardTime = new window.Date(`${parseInt(day, month, year)}`);

  const result = time - cardTime;

  console.log(flightHour.slice(11));

  // console.log(cardTime);
  // console.log(parseInt(year), month, day);

  return (
    <CardBody onClick={onClick}>
      <TopWrapper>
        <Direction>
          {from.slice(0, 4).toUpperCase()} {'-'} {to.slice(0, 4).toUpperCase()}
        </Direction>
        <InfoTitle attention>
          <Time>21h</Time>
          <Date>10:26PM</Date>
          <Date>2021-10-01</Date>
        </InfoTitle>
      </TopWrapper>
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
          Time: <InfoContent>{depDate.slice(10)}</InfoContent>
        </InfoTitle>
      </InfoWrapper>
      <PriceTag>{price}zł</PriceTag>
    </CardBody>
  );
};

export default FlyCard;
