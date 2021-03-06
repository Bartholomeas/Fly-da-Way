import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0;
  top: 0;
  /* background-color: ${({ theme }) => theme.colors.lightGrey}; */
`;

const Image = styled.svg`
  height: 3rem;
  margin-right: 0.6rem;
  color: ${({ theme }) => theme.colors.lightGrey};
`;

const LogoText = styled.p`
  font-size: 2.6rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.baseBlue};
`;

const LogoEl = styled.span`
  color: ${({ theme }) => theme.colors.darkerBlue};
`;

export const Logo = () => {
  return (
    <Wrapper>
      <Image viewBox="0 0 99 99" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M44.9851 44.9831C42.4902 47.4781 42.4902 51.5219 44.9851 54.0149C47.4781 56.5098 51.5239 56.5098 54.0169 54.0149C56.5118 51.5199 56.5118 47.4761 54.0169 44.9831C51.5219 42.4902 47.4781 42.4902 44.9851 44.9831ZM49.5 0C22.1612 0 0 22.1612 0 49.5C0 76.8388 22.1612 99 49.5 99C76.8388 99 99 76.8388 99 49.5C99 22.1612 76.8388 0 49.5 0ZM74.6771 29.5503L61.5097 58.3621C60.8728 59.7555 59.7555 60.8728 58.3621 61.5097L29.5523 74.6771C26.229 76.1961 22.8039 72.771 24.3229 69.4477L37.4923 40.6359C38.1292 39.2425 39.2465 38.1252 40.6399 37.4883L69.4497 24.3209C72.773 22.8039 76.1961 26.227 74.6771 29.5503V29.5503Z"
          fill="#E44764"
        />
      </Image>
      <LogoText>
        Fly <LogoEl>da</LogoEl>'Way
      </LogoText>
    </Wrapper>
  );
};
