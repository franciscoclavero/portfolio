import React from 'react';
import SkillsArea from 'src/components/organisms/SkillsArea';
import { skillsList } from 'src/DB/skillsList';

import { SkillsPageStyled } from './styled.module';

const SkillsPage = () => {
  return (
    <SkillsPageStyled>
      <SkillsArea { ...skillsList.hard } border />
      <SkillsArea { ...skillsList.soft } />
    </SkillsPageStyled>
  )
};

export default SkillsPage;