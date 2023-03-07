import React from 'react';
import { ContactAreaTextStyled } from './styled.module';

interface IContactArea {
  text: string;
  align: string;
}

const ContactAreaText = ({text, align}: IContactArea) => {
  return (
    <ContactAreaTextStyled align={align}> { text } </ContactAreaTextStyled>
  );
};

export default ContactAreaText;