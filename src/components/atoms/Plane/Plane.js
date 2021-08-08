import React from 'react';
import styled, { keyframes } from 'styled-components';

const fly = keyframes`
    from {
        transform:translate(-20%, 60%) rotate(0)
    }
    to {
        transform:translate(100vw, 100vh) rotate(90deg)

    }
`;

const PlaneIcon = styled.svg`
  position: absolute;
  opacity: 0.3;
  height: 5rem;
  left: -60px;
  transform-origin: 50px 50px;
  transform: translate(100px, 100px);
  /* animation: ${fly} 15s infinite ease-in-out; */

  &:nth-child(1) {
    transform: translate(50px, 50px);
  }

  &:nth-child(2) {
    transform: translate(50px, 150px);
  }
  &:nth-child(3) {
    transform: translate(250px, 350px) rotate(90deg);
  }
  &:nth-child(4) {
    transform: translate(-90vw, 350px) rotate(180deg);
  }
  &:nth-child(5) {
    transform: translate(75vw, 350px) rotate(180deg);
  }
`;

const Plane = () => {
  return (
    <PlaneIcon width="100" height="100" viewBox="0 0 100 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M83.3333 33.5025H63.4911L45.2445 1.40641C45.0012 0.979089 44.6499 0.623967 44.2261 0.376995C43.8024 0.130023 43.3212 -3.08724e-05 42.8313 5.49707e-09L31.4598 5.49707e-09C29.6143 5.49707e-09 28.2827 1.77459 28.7896 3.5579L37.3018 33.5025H19.4441L11.944 23.4518C11.4197 22.7486 10.5951 22.335 9.72181 22.335H2.77907C0.971766 22.335 -0.354629 24.0416 0.0846095 25.8039L5.55512 44.6701L0.0846095 63.5362C-0.354629 65.2985 0.971766 67.0051 2.77907 67.0051H9.72181C10.5968 67.0051 11.4197 66.5915 11.944 65.8883L19.4441 55.8376H37.3018L28.7896 85.7805C28.2827 87.5638 29.6143 89.3401 31.4598 89.3401H42.8313C43.8279 89.3401 44.748 88.8027 45.2428 87.9337L63.4911 55.8376H83.3333C89.4704 55.8376 100 50.8384 100 44.6701C100 38.5017 89.4704 33.5025 83.3333 33.5025Z"
        fill="#447AAD"
      />
    </PlaneIcon>
  );
};

export default Plane;
