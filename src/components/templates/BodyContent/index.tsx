import React from 'react';
import ExperiencePage from 'src/components/pages/ExperiencePage';

import HomePage from 'src/components/pages/HomePage';
import SkillsPage from 'src/components/pages/SkillsPage';

import { BodyContentStyled } from './style.module';

const BodyContent = () => {
  return ( 
    <BodyContentStyled>
      <HomePage />
      <ExperiencePage />
      <SkillsPage />
    </BodyContentStyled>
  );
};

export default BodyContent;