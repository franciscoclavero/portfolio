import React from 'react';

import MenuItemsArea from 'src/components/molecules/MenuItemsArea';

import { MenuStyled } from './styled.module';

const MenuNavbar = () => {
  return (
    <MenuStyled>
      <MenuItemsArea />
    </MenuStyled>
  );
}

export default MenuNavbar;