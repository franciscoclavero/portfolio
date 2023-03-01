import React from 'react';

import BodyContent from '../BodyContent';
import MenuNavbar from '../MenuNavbar';
import Ocean from '../Ocean';

import { BackgroundStyled } from './styled.module';

const Background = () => {
  return (
    <BackgroundStyled>
      <Ocean />
      <MenuNavbar />
      <BodyContent />
    </BackgroundStyled>
  )
}

export default Background;
