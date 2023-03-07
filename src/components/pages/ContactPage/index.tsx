import React from 'react';

import ContactContentArea from 'src/components/organisms/ContactContentArea';

import { ContactPageStyled, ContactAreaTitle } from './styled.module';

const ContactPage = () => {
  return (
    <ContactPageStyled>
      <ContactAreaTitle> Contato </ContactAreaTitle>
      <ContactContentArea />
    </ContactPageStyled>
  );
};

export default ContactPage;