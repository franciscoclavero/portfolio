import React from 'react';
import Button from 'src/components/atoms/Button';

import Input from '../../../components/atoms/Input';
import TextArea from '../../../components/atoms/TextArea';
import { ButtonAreaStyled, FormAreaStyled, InputAreaStyled } from './styled.module';

const ContactForm = () => {
  return (
    <>
      <FormAreaStyled>
        <InputAreaStyled>
          <Input placeholder='Nome' name='name'/>
          <Input placeholder='E-mail' name='email'/>
        </InputAreaStyled>
        <TextArea placeholder='Digite sua mensagem' name='message'/>
        <ButtonAreaStyled>
          <Button contentText='Enviar'/>
        </ButtonAreaStyled>
      </FormAreaStyled>
    </>
  );
};

export default ContactForm;