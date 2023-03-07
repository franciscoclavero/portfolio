import React from 'react';

import ProjectList from '../../../components/molecules/ProjectList';

import { BodyProjects, ProjectAreaTitle } from './styled.module';

const ProjectsPage = () => {
  return (
    <BodyProjects>
      <ProjectAreaTitle> Projetos </ProjectAreaTitle>
      <ProjectList />
    </BodyProjects>
  );
};

export default ProjectsPage;