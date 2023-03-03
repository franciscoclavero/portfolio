import React from 'react';
import ExperiencePage from 'src/components/pages/ExperiencePage';

import HomePage from 'src/components/pages/HomePage';

import { BodyContentStyled } from './style.module';

const BodyContent = () => {
  return ( 
    <BodyContentStyled>
      <HomePage />
      <ExperiencePage />
    </BodyContentStyled>
  );
};

export default BodyContent;