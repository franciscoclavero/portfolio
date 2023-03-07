import React from 'react';

import ContactPage from '../../../components/pages/ContactPage';
import ProjectsPage from '../../../components/pages/ProjectsPage';
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
      <ContactPage />
    </BodyContentStyled>
  );
};

export default BodyContent;