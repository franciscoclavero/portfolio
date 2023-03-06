import styled from 'styled-components';

type TSkillsArea = {
  border?: boolean
}

export const SkillsAreaStyled = styled.div<TSkillsArea>`
  width: 50%;
  ${(props) => props.border ? 'border-right: 1px solid rgba(255, 255, 255, 0.25);' : ''} 
`;

export const SkillsAreaItemsStyled = styled.div<TSkillsArea>`
  width: 433px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`; 