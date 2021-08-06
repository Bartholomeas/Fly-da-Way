import React, { useState } from 'react';
import { CardBody, CarrierSign, Time, Date, Direction, InfoTitle, PriceTag, InfoContent, InfoWrapper, Timeline, TimeInfo } from './FlyCard.styles';

const FlyCard = ({ from, to, price, depDate, direct, carrierId, time, flightHour, onClick }) => {
  const [flyTime, setFlyTime] = useState({});
  const year = depDate.slice(0, 4);
  const month = depDate.slice(5, 7);
  const day = depDate.slice(8, 10);
  const cardTime = new window.Date(`${parseInt(day, month, year)}`);

  const result = time - cardTime;

  // console.log(parseInt(year), month, day);

  return (
    <CardBody onClick={onClick}>
      <Direction>
        {from.slice(0, 4).toUpperCase()} <Timeline>2:36h</Timeline> {to.slice(0, 4).toUpperCase()}
      </Direction>
      <TimeInfo>
        <Time>21h</Time>
        <Date>10:26PM</Date>
        <Date>2021-10-01</Date>
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
