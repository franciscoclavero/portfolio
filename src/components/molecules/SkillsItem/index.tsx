import React from 'react';

import { SkillBody, SkillsAbbr, SkillIcon } from './styled.module';

interface IItem {
  name: string,
  src: string,
  props: string[]
}

const SkillsItem = ({ name, src, props }: IItem) => {
  return (
    <SkillBody>
      <SkillsAbbr title={name}>
        <SkillIcon src={src} />
      </SkillsAbbr>
    </SkillBody>
  )
};

export default SkillsItem;