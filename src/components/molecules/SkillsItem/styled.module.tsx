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
  ${(props) => props.background ? '    filter: invert(15%) sepia(21%) saturate(5737%) hue-rotate(177deg) brightness(93%) contrast(102%);' : ''}
`; 