import React from 'react';
import { CardBody, CarrierSign, TopWrapper, Time, Date, Direction, InfoTitle, PriceTag } from './FlyCard.styles';

const FlyCard = ({ from, to, price, depDate, direct, carrierId }) => {
  return (
    <CardBody>
      <TopWrapper>
        <Direction>Pichlice {'-'} Lututów</Direction>
        <InfoTitle attention>
          <Time>21h</Time>
          <Date>10:26PM</Date>
          <Date>2021-10-01</Date>
        </InfoTitle>
      </TopWrapper>
      <CarrierSign>{carrierId}</CarrierSign>
      {/* <InfoWrapper>
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
      </InfoWrapper> */}
      <PriceTag>{price}zł</PriceTag>
    </CardBody>
  );
};

export default FlyCard;
