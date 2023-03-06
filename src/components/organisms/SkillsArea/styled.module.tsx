import styled from 'styled-components';

type TSkillsArea = {
  border?: boolean
}

export const SkillsAreaStyled = styled.div<TSkillsArea>`
  ${(props) => props.border ? 'border-right: 1px solid rgba(255, 255, 255, 0.25);' : ''} 
  position: relative;
  width: 50%;
`;

export const SkillsAreaItemsStyled = styled.div<TSkillsArea>`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: auto;
  width: 433px;
`;

export const SkillsAreaTitle = styled.h1`
  color: #fff;
  text-align: center;
`;