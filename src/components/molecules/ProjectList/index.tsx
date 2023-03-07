import React from 'react';
import { projectList } from '../../../db/projectList';

import ProjectImage from '../ProjectImage';

import { ProjectListBody } from './styled.module';

const ProjectList = () => {
  return (
    <ProjectListBody>
      {
        projectList.map((item, index) => {
          return <ProjectImage {...item} key={index} />;
        })
      }
    </ProjectListBody>
  );
};

export default ProjectList;