import React from 'react';

import BodyContent from '../../templates/BodyContent';
import MenuNavbar from '../../molecules/MenuNavbar';
import Ocean from '../../molecules/Ocean';
import Footer from 'src/components/atoms/Footer';

import { BackgroundStyled } from './styled.module';

const Background = () => {
  return (
    <BackgroundStyled>
      <Ocean />
      <MenuNavbar />
      <BodyContent />
      <Footer />
    </BackgroundStyled>
  )
}

export default Background;
