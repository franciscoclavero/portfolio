import React from 'react';

import { ItemArea, ItemPeriod, ItemFirstTitle, ItemSecondTitle, ItemDescription } from './styled.module';

interface IItem {
  data: TExperienceItem
}

type TExperienceItem = {
  period: string,
  mainTitle: string,
  subTitle: string,
  description: string
}

const ExperienceItem = ({ data }: IItem) => {
  return (
    <ItemArea>
      <ItemPeriod> {data.period } </ItemPeriod>
      <ItemFirstTitle> {data.mainTitle } </ItemFirstTitle>
      <ItemSecondTitle> {data.subTitle } </ItemSecondTitle>
      <ItemDescription> {data.description } </ItemDescription>
    </ItemArea>
  )
};

export default ExperienceItem;