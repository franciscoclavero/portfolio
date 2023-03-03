import React from 'react';

import InformationGroupArea from 'src/components/organisms/InformationGroupArea';
import DescriptionArea from '../../molecules/DescriptionArea';

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