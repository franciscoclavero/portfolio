import React from 'react';

import Bubble from 'src/components/atoms/Bubble';

import { BubbleAreaStyled } from './styled.module';


const BubbleArea = () => {
  return (
    <BubbleAreaStyled>
      <Bubble  
          size='50px'
          left='10%'
          animationDelay='3s'
          animationDuration='10s'
          opacity={0.2} />
      <Bubble    
          size='30px'
          left='40%'
          animationDelay='1s'
          animationDuration='5s'
          opacity={0.1} />
    </BubbleAreaStyled>
  );
};

export default BubbleArea;