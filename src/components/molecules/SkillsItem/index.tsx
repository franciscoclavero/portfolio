import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'src/hooks/useSelector';
import { setDisplay, setLeft, setSkillList, setTop } from 'src/redux/reducer/skillsReducer';

import { SkillBody, SkillsAbbr, SkillIcon } from './styled.module';

interface IItem {
  name: string,
  src: string,
  props: string[]
}

const SkillsItem = ({ name, src, props }: IItem) => {
  const ref = useRef<HTMLDivElement>(null);
  const { display } = useAppSelector(store => store.skills);
  const [activeItem, setActiveItem] = useState(false)
  const dispatch = useDispatch();

  const handleClick = () => {
    if (ref.current === null) return;
    if (props.length === 0) return;

    const skillIconHeight = 50;

    const displayValue = display === 'flex' ? 'none' : 'flex';

    dispatch( setTop( (ref.current.offsetTop + skillIconHeight / 1.5) ) );
    dispatch( setLeft( ref.current.offsetLeft) );
    dispatch( setSkillList( props ) );
    dispatch( setDisplay( displayValue ) );
  };

  return (
    <SkillBody ref={ref} onClick={handleClick}>
      <SkillsAbbr title={name}>
        <SkillIcon src={src} />
      </SkillsAbbr>
    </SkillBody>
  )
};

export default SkillsItem;