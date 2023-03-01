import React from 'react';

import BodyContent from '../BodyContent';
import Ocean from '../Ocean';

import { BackgroundStyled } from './styled.module';

const Background = () => {
  return (
    <BackgroundStyled>
      <Ocean />
      <BodyContent />
    </BackgroundStyled>
  )
}

export default Background;
