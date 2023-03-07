import React from 'react';

import { ImageAreaStyled, ImageStyled, TextStyled, Hyperlink } from './styled.module';

interface IProjectImage {
  src: string;
  name: string;
  url: string;
}

const ProjectImage = ({src, name, url}: IProjectImage) => {
  return (
    <ImageAreaStyled>
      <ImageStyled src={src} />
      <Hyperlink href={url} target="_blank">
        <TextStyled> { name } </TextStyled>
      </Hyperlink>
    </ImageAreaStyled>
  );
};

export default ProjectImage;