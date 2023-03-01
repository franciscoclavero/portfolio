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
      <Bubble    
          size='10px'
          left='30%'
          animationDelay='5s'
          animationDuration='20s'
          opacity={0.3} />
      <Bubble    
          size='35px'
          left='40%'
          animationDelay='8s'
          animationDuration='8s'
          opacity={0.2} />
        <Bubble    
          size='45px'
          left='60%'
          animationDelay='10s'
          animationDuration='15s'
          opacity={0.1} />
        <Bubble    
          size='40px'
          left='80%'
          animationDelay='3s'
          animationDuration='30s'
          opacity={0.4} />
        <Bubble    
          size='25px'
          left='90%'
          animationDelay='2s'
          animationDuration='8s'
          opacity={0.2} />
        <Bubble
          size='35px'
          left='85%'
          animationDelay='6s'
          animationDuration='10s'
          opacity={0.2} />
    </BubbleAreaStyled>
  );
};

export default BubbleArea;