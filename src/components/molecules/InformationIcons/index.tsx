import React from 'react';

import LinkIcon from '../LinkIcon';

import { InformationTitle } from './styled.module';

const InformationIcons = () => {
  return (
    <InformationTitle>
      <div> <strong> Contatos: </strong> </div>  
      <div> 
        <LinkIcon type='instagram' height='24px' width='24px' />
        <LinkIcon type='github' height='24px' width='24px' />
        <LinkIcon type='linkedin' height='24px' width='24px' />
      </div> 
    </InformationTitle>
  );
};

export default InformationIcons;