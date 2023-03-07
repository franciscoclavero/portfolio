import React from 'react';
import { iconList } from '../../../db/iconList';

import Image from '../../../components/atoms/Image';

interface ILinkIcon {
  type: string,
  height: string,
  width: string
}

const LinkIcon = ({ type, height, width }: ILinkIcon) => {
  const selectedItem = iconList[type];

  return (
    <abbr title={selectedItem.name}>
      <a href={selectedItem.url} target="_blank">
        <Image height={height} width={width} src={selectedItem.src} />
      </a>
    </abbr>
  )
};

export default LinkIcon;