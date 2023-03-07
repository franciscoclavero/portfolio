import React from 'react';
import ProjectsPage from 'src/components/pages/ProjectsPage';
import ExperiencePage from '../../../components/pages/ExperiencePage';

import HomePage from '../../../components/pages/HomePage';
import SkillsPage from '../../../components/pages/SkillsPage';

import { BodyContentStyled } from './style.module';

const BodyContent = () => {
  return ( 
    <BodyContentStyled>
      <HomePage />
      <ExperiencePage />
      <SkillsPage />
      <ProjectsPage />
    </BodyContentStyled>
  );
};

export default BodyContent;