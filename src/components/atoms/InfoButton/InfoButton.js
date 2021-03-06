import React from 'react';
import styled from 'styled-components';

export const InfoBtn = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

export const InfoIcon = styled.svg`
  height: 3rem;
`;

const InfoButton = ({ onClick }) => {
  return (
    <InfoBtn onClick={onClick}>
      <InfoIcon width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M50 -1.52588e-05C22.3877 -1.52588e-05 0 22.3957 0 50C0 77.6203 22.3877 100 50 100C77.6123 100 100 77.6203 100 50C100 22.3957 77.6123 -1.52588e-05 50 -1.52588e-05ZM50 22.1774C54.6766 22.1774 58.4677 25.9685 58.4677 30.6451C58.4677 35.3218 54.6766 39.1129 50 39.1129C45.3234 39.1129 41.5323 35.3218 41.5323 30.6451C41.5323 25.9685 45.3234 22.1774 50 22.1774ZM61.2903 73.3871C61.2903 74.7232 60.2071 75.8064 58.871 75.8064H41.129C39.7929 75.8064 38.7097 74.7232 38.7097 73.3871V68.5484C38.7097 67.2123 39.7929 66.129 41.129 66.129H43.5484V53.2258H41.129C39.7929 53.2258 38.7097 52.1425 38.7097 50.8064V45.9677C38.7097 44.6316 39.7929 43.5484 41.129 43.5484H54.0323C55.3683 43.5484 56.4516 44.6316 56.4516 45.9677V66.129H58.871C60.2071 66.129 61.2903 67.2123 61.2903 68.5484V73.3871Z"
          fill="#447AAD"
        />
      </InfoIcon>
    </InfoBtn>
  );
};

export default InfoButton;
