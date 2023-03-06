import React from 'react';
import SkillsItem from '../../../components/molecules/SkillsItem';
import SkillsBallon from '../../molecules/SkillsBallon';

import { SkillsAreaItemsStyled, SkillsAreaStyled, SkillsAreaTitle } from './styled.module';

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
    <>
      <SkillsAreaStyled border={border}>
        <SkillsAreaTitle>{title}</SkillsAreaTitle>
        <SkillsAreaItemsStyled>
          {
            skills.map((data, index) => {
              return <SkillsItem {...data} key={index}/>
            })
          }
        </SkillsAreaItemsStyled>
      </SkillsAreaStyled>
      <SkillsBallon />
    </>
  )
};

export default SkillsArea;
