import styled from "styled-components";

import { IBubbles } from "./";
;

export const BubbleStyled = styled.div<IBubbles>`
  animation: bubble 10s ease-in-out infinite;
  animation-delay: ${(props) => props.animationDelay };
  animation-duration: ${(props) => props.animationDuration };
  background-color: white;
  border-radius: 100%;
  bottom: -10%;
  height: ${(props) => props.size };
  left: ${(props) => props.left };
  opacity: ${(props) => props.opacity };
  position: absolute;
  width: ${(props) => props.size };

  @keyframes bubble {
    0% {bottom: -10%; opacity: 0;}
    100% {bottom: 100%;}
  }
`;