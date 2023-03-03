import React from 'react';
import { ExperiencePageStyled } from './styled.module';

import ExperienceArea from '../../../components/organisms/ExperienceArea';
import { experienceList } from '../../../DB/experienceList';

const ExperiencePage = () => {
  return (
    <ExperiencePageStyled>
      <ExperienceArea { ...experienceList.learning } border/>
      <ExperienceArea { ...experienceList.professionals } />
    </ExperiencePageStyled>
  );
};

export default ExperiencePage;