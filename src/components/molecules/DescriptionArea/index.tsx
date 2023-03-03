import React from 'react';

import PersonalDescriptionText from '../../../components/atoms/PersonalDescriptionText';
import AnimationPersonalArea from '../AnimationPersonalArea';

import { DescriptionAreaStyled } from './style.module';

const DescriptionArea = () => {
  return (
    <>
      <DescriptionAreaStyled>
        <AnimationPersonalArea />
        <PersonalDescriptionText />
      </DescriptionAreaStyled>
    </>
  );
};

export default DescriptionArea;