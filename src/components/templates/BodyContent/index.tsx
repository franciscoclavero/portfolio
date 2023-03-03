import React from 'react';

import HomePage from 'src/components/pages/HomePage';

import { BodyContentStyled } from './style.module';

const BodyContent = () => {
  return ( 
    <BodyContentStyled>
      <HomePage />
    </BodyContentStyled>
  );
};

export default BodyContent;