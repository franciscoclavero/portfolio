import React from 'react';
import { ButtonStyled } from './styled.module';

interface IButton {
  contentText: string;
}

const Button = ({ contentText }: IButton) => {
  return <ButtonStyled> {contentText }</ButtonStyled>
}

export default Button;