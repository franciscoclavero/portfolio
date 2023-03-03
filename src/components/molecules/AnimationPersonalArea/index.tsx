import React from 'react';

import { AnimationArea, Animation } from './styled.module';

const AnimationPersonalArea = () => {
  return (
    <AnimationArea>
      <p> Olá, eu sou </p>
      <Animation>
        <div> <strong> Francisco Clavero </strong> </div>
        <div> <strong> Desenvolvedor Front-End </strong> </div>
      </Animation>
    </AnimationArea>
  );
};

export default AnimationPersonalArea;