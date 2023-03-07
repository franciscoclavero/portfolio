import React from 'react';
import ContactAreaText from 'src/components/atoms/ContactAreaText';
import ContactForm from 'src/components/molecules/ContactForm';

import { ContactAreaStyled, TextContact } from './styled.module';

const ContactContentArea = () => {
  return (
    <ContactAreaStyled>
      <ContactForm />
      <TextContact>
        <ContactAreaText text='E-mail: franciscogkoclavero@gmail.com' align='left'/>
        <ContactAreaText text='Telefone: (49) 9 8427-3623' align='right'/>
      </TextContact>
    </ContactAreaStyled>
  );
};

export default ContactContentArea;