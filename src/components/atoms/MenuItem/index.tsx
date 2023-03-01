import React from 'react';

import { MenuItemStyled } from './styled.module';

interface IMenuItem {
  contentText: string;
}

const MenuItem = ({ contentText }: IMenuItem) => {
  return (
    <MenuItemStyled> { contentText } </MenuItemStyled>
  );
};

export default MenuItem;