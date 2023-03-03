import React from 'react';

import { ImageStyled } from './styled.module';

interface IImage {
  src: string,
  height: string,
  width: string
}

const Image = (props :IImage) => {
  return <ImageStyled {...props} />
}

export default Image;