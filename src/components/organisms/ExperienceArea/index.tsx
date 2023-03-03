import React from 'react';
import ExperienceTitle from 'src/components/atoms/ExperienceTitle';
import ExperienceItem from 'src/components/molecules/ExperienceItem';

import { ExperienceAreaStyled } from './styled.module';

interface IExperienceData {
  title: string,
  items: TExperience[],
  border?: boolean
};

type TExperience = {
  period: string,
  mainTitle: string,
  subTitle: string,
  description: string
};

const ExperienceArea = ({ title, items, border }: IExperienceData) => {
  return (
    <ExperienceAreaStyled border={border}>
      <ExperienceTitle title={title} />
      {
        items.map((item, index) => {
          return <ExperienceItem key={index} data={item}/>
        })
      }
    </ExperienceAreaStyled>
  )
};

export default ExperienceArea;
