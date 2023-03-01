import React from 'react';

import { MenuItemsAreaStyled } from './styled.module';

import MenuItem from 'src/components/atoms/MenuItem';

const MenuItemsArea = () => {
  return (
    <MenuItemsAreaStyled>
        <MenuItem contentText='HOME' />
        <MenuItem contentText='EXPERIÊNCIAS' />
        <MenuItem contentText='SKILLS' />
        <MenuItem contentText='PORTFOLIO' />
        <MenuItem contentText='CONTATO' />
    </MenuItemsAreaStyled>
  )
};

export default MenuItemsArea;