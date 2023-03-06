import React from 'react';

import SkillsBallonItem from 'src/components/atoms/SkillsBallonItem';

import { SkillsBallonStyled } from './styled.module';

const SkillsBallon = () => {
  return ( 
    <SkillsBallonStyled>
      <SkillsBallonItem />
    </SkillsBallonStyled>
  )
};

export default SkillsBallon;