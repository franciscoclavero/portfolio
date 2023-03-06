import React from 'react';

import SkillsBallonItem from 'src/components/atoms/SkillsBallonItem';
import { useAppSelector } from 'src/hooks/useSelector';

import { SkillsBallonStyled } from './styled.module';

const SkillsBallon = () => {
  const {top, left, display, skillList} = useAppSelector(store => store.skills);

  return ( 
    <SkillsBallonStyled top={top} left={left} display={display}>
      {
        skillList.map((item, index) => {
          return <SkillsBallonItem contentText={item} key={index}/>
        })
      }
    </SkillsBallonStyled>
  )
};

export default SkillsBallon;