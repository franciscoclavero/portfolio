import React from 'react';
import { TitleExperience } from './styled.module';

interface IExperienceTitle {
  title: string
}

const ExperienceTitle = ({ title }: IExperienceTitle) => {
  return (
    <TitleExperience>{title}</TitleExperience>
  );
};

export default ExperienceTitle;