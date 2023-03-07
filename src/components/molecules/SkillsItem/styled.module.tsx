import styled from "styled-components";

export const SkillBody = styled.div`
  width: 50px;
  height: 50px;
  margin: 8px;
  cursor: pointer;
  border: none;
`;

export const SkillsAbbr = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

interface ISkillIcon {
  background?: boolean
}

export const SkillIcon = styled.img<ISkillIcon>`
  height: 48px;
  margin: 1px;
  ${(props) => props.background ? 'filter: invert(82%) sepia(100%) saturate(0%) hue-rotate(86deg) brightness(110%) contrast(101%);' : ''}
`; 