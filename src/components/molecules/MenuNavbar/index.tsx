import React from 'react';

import MenuItemsArea from '../../../components/organisms/MenuItemsArea';

import { MenuStyled } from './styled.module';

const MenuNavbar = () => {
  return (
    <MenuStyled>
      <MenuItemsArea />
    </MenuStyled>
  );
}

export default MenuNavbar;