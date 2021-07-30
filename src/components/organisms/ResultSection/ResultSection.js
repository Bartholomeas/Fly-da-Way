import React from 'react';
import { ResultWrapper, ColorWrapper } from './ResultSection.styles';
import FlyCard from 'components/molecules/FlyCard/FlyCard';

const ResultSection = () => {
  return (
    <ColorWrapper>
      <ResultWrapper>
        <FlyCard />
        <FlyCard />
        <FlyCard />
        <FlyCard />
        <FlyCard />
        <FlyCard />
        <FlyCard />
        <FlyCard />
        <FlyCard />
        <FlyCard />
        <FlyCard />
        <FlyCard />
      </ResultWrapper>
    </ColorWrapper>
  );
};

export default ResultSection;
