import React from 'react';
import SkillsItem from 'src/components/molecules/SkillsItem';

import { SkillsAreaItemsStyled, SkillsAreaStyled } from './styled.module';

interface ISkillsList {
  title: string,
  skills: TSkill[],
  border?: boolean
};

type TSkill = {
  'name': string,
  'src': string, 
  'props': string[]
};

const SkillsArea = ({title, skills, border}: ISkillsList) => {
  return (
    <SkillsAreaStyled border={border}>
      <h1>{title}</h1>
      <SkillsAreaItemsStyled>
        {
          skills.map((data, index) => {
            return <SkillsItem {...data} key={index}/>
          })
        }
      </SkillsAreaItemsStyled>
    </SkillsAreaStyled>
  )
};

export default SkillsArea;
