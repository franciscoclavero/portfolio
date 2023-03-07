import React from 'react';

import { InputStyled } from './styled.module';

interface IInput {
  placeholder: string,
  name: string
}

const Input = ({placeholder, name}: IInput) => {
  return (
    <InputStyled type="text" id={name} name={name} placeholder={placeholder} />
  )
};

export default Input;