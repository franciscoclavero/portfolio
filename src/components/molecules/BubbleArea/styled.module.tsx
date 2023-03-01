import styled from "styled-components";

export const BubbleAreaStyled = styled.div`
  width: 100%;
  height: 100%;
  animation: bubbles 10s linear infinite;

  @keyframes bubbles {
    0%, 100% {transform: rotate(-5deg);}
    50% {transform: rotate(5deg);}
  }
`;