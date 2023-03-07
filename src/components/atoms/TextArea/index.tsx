import React from 'react';

import { TextAreaStyled } from './styled.module';

interface ITextArea {
  placeholder: string,
  name: string
}

const TextArea = ({placeholder, name}: ITextArea) => {
  return (
    <TextAreaStyled placeholder={placeholder} name={name} id={name} />
  );
};

export default TextArea;