import React from 'react';
import styled from 'styled-components';
import Plane from 'components/atoms/Plane/Plane';

const PlaneWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: orange;
  /* overflow: hidden; */
`;

const AirportAnim = () => {
  return (
    <PlaneWrapper>
      <Plane />
      <Plane />
      <Plane />
      <Plane />
      <Plane />
    </PlaneWrapper>
  );
};
export default AirportAnim;
