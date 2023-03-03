import React from 'react';

import DescriptionArea from '../../molecules/DescriptionArea';
import InformationGroupArea from 'src/components/molecules/InformationGroupArea';

import { PrincipalBody, ContentArea } from './style.module';

const HomePage = () => {
  return (
    <PrincipalBody> 
      <ContentArea>
        <DescriptionArea />
        <InformationGroupArea />
      </ContentArea>
    </PrincipalBody>
  )
};

export default HomePage;