import React from 'react';
import { BubbleStyled } from './styled.module';


export interface IBubbles {
  size: string;
  left: string;
  animationDelay: string;
  animationDuration: string;
  opacity: number;
}

const Bubble = ({ 
  size, 
  left, 
  animationDelay, 
  animationDuration, 
  opacity}: IBubbles) => {
  return <BubbleStyled
            size={size}
            left={left}
            animationDelay={animationDelay}
            animationDuration={animationDuration}
            opacity={opacity} />
}

export default Bubble;