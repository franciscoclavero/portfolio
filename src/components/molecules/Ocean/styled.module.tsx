import styled from "styled-components";

export const OceanStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &::after, &::before {
    background-color: white;
    width: 120%;
    height: 120px;
    position: absolute;
    content: '';
    top: -80px;
    left: -10%;
    border-radius: 100%;
    animation: waves 10s ease infinite;
    opacity: 0.2;
  }
  &::before {
    top: -60px;
    animation-delay: 5s;
    opacity: 0.1;
    left: -5%;
  }

  @keyframes waves {
    0%, 100% {transform: rotate(-2deg);}
    50% {transform: rotate(2deg);}
  }
`;