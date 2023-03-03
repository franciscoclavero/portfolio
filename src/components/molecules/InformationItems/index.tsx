import React from 'react';

import { InformationItemStyled } from './styled.module';

interface IItems {
  title: string;
  value: string;
}

const InformationItems = ({ title, value }: IItems) => {
  return (
    <InformationItemStyled>
      <div> <strong> { title } </strong> </div>  
      <div> { value } </div>  
    </InformationItemStyled>
  );
}

export default InformationItems;